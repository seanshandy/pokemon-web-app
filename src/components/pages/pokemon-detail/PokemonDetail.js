import React, { useEffect, useState } from 'react';
import { useParams } from'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../graphql/queries";

import Button from "../../button/Button";
import AddPokemon from "../../add-pokemon/AddPokemon";

import "./PokemonDetail.css";
import "./PokemonType.css";


function PokemonDetail() {
    let { name } = useParams();
    let { nickname } = useParams();

    const [pokemon, setPokemon] = useState();
    const [loadingState, setLoadingState] = useState(true);
    const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAIL, { variables: { name: name} });
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState();
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
            console.log(pokemon);
            setLoadingState(false);
        }
    }, [pokemon])


    function CatchPokemon() {
        const chance = Math.random();

        if(chance > 0.5) {
            setModalTitle('Gotcha!');
            setCatched(true);
            setShowModal(true);
        } else {
            setModalTitle("Oops We've lost it");
            setCatched(false);
            setShowModal(true);
        }
    }

    
    function SavePokemon (name) {
        const localPokemon = localStorage.getItem('my-pokemon');
        const oldPokemon = (localPokemon.length > 0? JSON.parse(localPokemon) : null);
        const latestID = (oldPokemon.length > 0 ? oldPokemon[oldPokemon.length - 1].mypokemonid + 1 : 1);

        let newPokemon = [];

        const data = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            mypokemonid: latestID,
            nickname: name, 
        }
        
        if (latestID === 1) {
            newPokemon.push(data);
        } else {
            newPokemon = oldPokemon;
            newPokemon.push(data);
        }

        localStorage.setItem('my-pokemon', JSON.stringify(newPokemon));
        alert(name + ' have been added to your pokemon list');
        setShowModal(false);
    }


    return (
        <>
        <div className='p-detail-page'>
            <AddPokemon title={modalTitle} show={showModal} catched={catched} onClose={() => setShowModal(false)}  onSavedPokemon={SavePokemon} />
            {pokemon ? 
                <>
                    <div className="p-detail-header-container">
                        <span className="header-text">
                            {pokemon.name} &nbsp;
                            <span className="header-id">#{pokemon.id}</span> 
                        </span>                             
                    </div>

                    <div className="p-detail-container">
                        <div className="p-detail-image-container">
                            <img className="p-detail-image" src={ pokemon.sprites.front_default } alt="image"/>
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
                                                        <span>{ab.ability.name}</span>
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
