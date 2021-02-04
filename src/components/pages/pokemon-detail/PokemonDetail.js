import React, { useEffect, useState } from 'react';
import { useParams } from'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../../graphql/queries";

import Button from "../../button/Button";

import "./PokemonDetail.css";
import "./PokemonType.css";


function PokemonDetail() {
    let { name } = useParams();

    const [pokemon, setPokemon] = useState();
    const [loadingState, setLoadingState] = useState(true);
    const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_DETAIL, { variables: { name: name} });

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


    return (
        <>
            <div className='p-detail-page'>
                {
                    pokemon ? 
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
                                <div className="catch-pokemon">
                                    <Button text="catch"></Button>
                                </div>
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
                                                    <span>{type.type.name}</span>
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
