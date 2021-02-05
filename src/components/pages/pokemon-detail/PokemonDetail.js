import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { GET_POKEMON_DETAIL } from "../../../graphql/queries";

import Button from "../../button/Button";
import Modal from "../../modal/Modal";

import "./PokemonDetail.css";
import "./PokemonType.css";


function PokemonDetail() {
    const history = useHistory();

    let { name } = useParams();
    let { nickname } = useParams();

    const [pokemon, setPokemon] = useState();
    const [loadingState, setLoadingState] = useState(true);
    const [getPokemon, { data }] = useLazyQuery(GET_POKEMON_DETAIL, { variables: { name: name} });
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState();
    const [modalBody, setModalBody] = useState();
    const [catched, setCatched] = useState(false);

    useEffect(() => {
        setLoadingState(true);
        getPokemon();
    }, []);


    useEffect(() => {
        if (data && loadingState) {
            setPokemon(data.pokemon);
        }
    }, [data])

    useEffect(() => {
        if (pokemon) {
            setLoadingState(false);
        }
    }, [pokemon])


    function CatchPokemon() {
        const chance = Math.random();

        window.setTimeout(null, 1000);
        
        if(chance > 0.5) {
            setModalTitle('Gotcha!');
            setModalBody("Give a nickname?");
            setCatched(true);
            setShowModal(true);
        } else {
            setModalTitle("Oops");
            setModalBody("We've lost it, try again!");
            setCatched(false);
            setShowModal(true);
        }
    }

    
    function SavePokemon (nickname) {
        const newNickname = nickname !== '' ? nickname : pokemon.name;
        const localPokemon = localStorage.getItem('my-pokemon') ? localStorage.getItem('my-pokemon') : [];
        const oldPokemon = localPokemon.length > 0? JSON.parse(localPokemon) : [];
        const latestID = oldPokemon.length > 0 ? oldPokemon[oldPokemon.length - 1].mypokemonid + 1 : 1;

        let newPokemon = [];

        const data = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            mypokemonid: latestID,
            nickname: newNickname, 
        }
        
        if (latestID === 1) {
            newPokemon.push(data);
        } else {
            newPokemon = oldPokemon;
            newPokemon.push(data);
        }

        localStorage.setItem('my-pokemon', JSON.stringify(newPokemon));
        setCatched(false);
        setShowModal(false);
        nextPath('/mypokemons');
    }

    function nextPath(path) {
        history.push(path);
    }

    return (
        <>
        <div className='p-detail-page'>
            <Modal title={modalTitle} body={modalBody} show={showModal} catched={catched} onClose={() => setShowModal(false)}  onSavedPokemon={SavePokemon} />
            
            {!loadingState && pokemon ? 
                <>
                    <IconContext.Provider value={{ className:"icon-back" }}>
                    <div onClick={() => history.goBack()} title="Go Back" className="btn-back">
                        <FaArrowCircleLeft />
                    </div>
                    </IconContext.Provider>
                    <div className="p-detail-header-container">
                        <span className="header-text">
                            {pokemon.name} &nbsp;
                            <span className="header-id">#{pokemon.id}</span> 
                        </span>                             
                    </div>

                    <div className="p-detail-container">
                        <div className="p-detail-img-container">
                            <img className="p-detail-img" src={ pokemon.sprites.front_default } alt={pokemon.name}/>
                            {
                                nickname ? <span className="nickname-text">{nickname}</span> :
                            <div className="catch-pokemon" onClick={() => CatchPokemon(pokemon)}>
                                <Button text="catch"></Button>
                            </div>
                            }
                        </div>
                        <div className="p-detail-info-container">
                                <div className={`p-detail-info-box type-${pokemon.types[0].type.name}`}>
                                    <div className="p-detail-info-box-left">
                                        <div className="box-height">
                                            <span className="box-text-title">Height</span>
                                            <span className="box-text-value">{pokemon.height} ft</span>
                                        </div>
                                        <div className="box-weight">
                                            <span className="box-text-title">Weight</span>
                                            <span className="box-text-value">{pokemon.weight} lbs</span>
                                        </div>
                                    </div>
                                    <div className="p-detail-info-box-right">
                                        <div className="box-abilities">
                                            <span className="box-text-title">Abilities</span>
                                            <ul className="abilitiy">
                                            {
                                                pokemon.abilities.map((ab) => {
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
                                        pokemon.types.map((type) => {
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
                <span>Loading..</span>
            }
        </div>
    </>
    )
}

export default PokemonDetail
