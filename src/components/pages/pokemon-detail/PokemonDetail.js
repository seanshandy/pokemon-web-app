import React, { useState, useContext, useEffect} from 'react';
import { useParams, useHistory } from'react-router-dom';
import { useQuery } from "@apollo/client";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

import { GET_POKEMON_DETAIL } from "../../../graphql/queries";
import { PokemonData } from '../../../contexts/MyPokemonContext';
import { UpdateMyPokemons } from "../../../utils/PokemonService";

import Button from "../../button/Button";
import Modal from "../../modal/Modal";
import "./PokemonDetail.css";
import "./PokemonType.css";


function PokemonDetail() {
    const history = useHistory();
    const { name } = useParams();
    const { mypokemonid } = useParams();
    const { mypokemons } = useContext(PokemonData);
    const [ mypokemon, setMypokemon ] = useState();

    const { data } = useQuery(GET_POKEMON_DETAIL, { variables: { name: name} });
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState();
    const [modalBody, setModalBody] = useState();
    const [catched, setCatched] = useState(false);
    const [released, setReleased] = useState(false);

    function onCatch() {
        const chance = Math.random();
        
        if(chance > 0.5) {
            setCatched(true);
            setModalTitle('Gotcha!');
            setModalBody("Give a nickname?");
            setShowModal(true);
            } else {
            setModalTitle("Oops");
            setModalBody("We've lost it, try again!");
            setCatched(false);
            setShowModal(true);
        }
    }
    
    function onSavePokemon (nickname) {
        const latestID = mypokemons.length > 0 ? mypokemons[mypokemons.length - 1].mypokemonid + 1 : 1;
        const newpokemon = {
            id: data.pokemon.id,
            name: data.pokemon.name,
            image: data.pokemon.sprites.front_default,
            mypokemonid: latestID,
            nickname: nickname === '' ? data.pokemon.name : nickname, 
        }
        mypokemons.push(newpokemon);
        UpdateMyPokemons(mypokemons);

        setCatched(false);
        setShowModal(false);
        nextPath('/mypokemons');
    }

    function showReleaseConfirmation() {
        setModalTitle("Release");
        setModalBody("Are you sure want to release this Pokemon?");
        setReleased(true);
        setShowModal(true);
    }

    function onReleasePokemon() {
        mypokemons.splice(mypokemons.findIndex(p => p.mypokemonid === mypokemonid ),1);
        UpdateMyPokemons(mypokemons);
        setShowModal(false);
        nextPath('/mypokemons');
    }

    function nextPath(path) {
        history.push(path);
    }

    useEffect(() => {
        if(mypokemons && mypokemonid) {
            setMypokemon(mypokemons.find(mp => {
                return Number(mp.mypokemonid) === Number(mypokemonid)
            }));
        }
    }, [mypokemonid, mypokemons, setMypokemon]);

    return (
        <>
        <div className='p-detail-page'>
            
            { data ? 
                <>
                    <Modal title={modalTitle} body={modalBody} show={showModal} catched={catched} 
                    onClose={() => setShowModal(false)}  onSavePokemon={onSavePokemon} 
                    pokemon={data.pokemon} 
                    onReleasePokemon={onReleasePokemon} released={released}/>

                    <IconContext.Provider value={{ className:"icon-back" }}>
                    <div onClick={() => history.goBack()} title="Go Back" className="btn-back">
                        <FaArrowCircleLeft />
                    </div>
                    </IconContext.Provider>
                    <div className="p-detail-header-container">
                        <span className="header-text">
                            {data.pokemon.name} &nbsp;
                            <span className="header-id">#{data.pokemon.id}</span> 
                        </span>                             
                    </div>

                    <div className="p-detail-container">
                        <div className="p-detail-img-container">
                            <img className="p-detail-img" src={ data.pokemon.sprites.front_default } alt={data.pokemon.name}/>
                            {
                                mypokemon ?  <span className="nickname-text">{mypokemon.nickname}</span> : null
                            }
                                <div className="button-container">
                                    <div className="btn-catch-pokemon" onClick={() => onCatch()}>
                                        <Button text="catch" size="size-normal"></Button>
                                    </div>
                                    {
                                        mypokemon ? 
                                        <div className="btn-release-pokemon" onClick={() => showReleaseConfirmation(mypokemonid)}>
                                            <Button text="release" size="size-normal"></Button>
                                        </div> 
                                        : null
                                    }
                                </div>
                        </div>
                        <div className="p-detail-info-container">
                                <div className={`p-detail-info-box type-${data.pokemon.types[0].type.name}`}>
                                    <div className="p-detail-info-box-left">
                                        <div className="box-height">
                                            <span className="box-text-title">Height</span>
                                            <span className="box-text-value">{data.pokemon.height} ft</span>
                                        </div>
                                        <div className="box-weight">
                                            <span className="box-text-title">Weight</span>
                                            <span className="box-text-value">{data.pokemon.weight} lbs</span>
                                        </div>
                                    </div>
                                    <div className="p-detail-info-box-right">
                                        <div className="box-abilities">
                                            <span className="box-text-title">Abilities</span>
                                            <ul className="abilitiy">
                                            {
                                                data.pokemon.abilities.map((ab) => {
                                                    return (
                                                    <li key={ab.ability.name} className="box-text-value abilities" >
                                                        {ab.ability.name}
                                                    </li>)
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-detail-info-type-box">
                                    <span className="box-text-title">Type</span>
                                    {
                                        data.pokemon.types.map((type) => {
                                            return (
                                            <div key={type.type.name} className={`type type-${type.type.name}`}>  
                                                <span className="type-value">{type.type.name}</span>
                                            </div>)
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </>
                :
                <h1>Loading..</h1>
            }
        </div>
    </>
    )
}

export default PokemonDetail
