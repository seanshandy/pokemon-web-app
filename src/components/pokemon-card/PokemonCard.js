import React from 'react';
import { Link } from "react-router-dom";

import "./PokemonCard.css";


function PokemonCard({ pokemon }) {
    const localPokemon = localStorage.getItem('my-pokemon');
    const isMypokemon = pokemon.nickname ? true : false;
    let total = 0;
        
    if(!isMypokemon && localPokemon) {
        JSON.parse(localPokemon).forEach((p) => {
            if(p.id === pokemon.id){
                total++;
            }
        })
    } else {
        total = 0;
    }

    return (
        <>
            <Link to={'/pokemon/' + pokemon.name + (isMypokemon ? '/' + pokemon.nickname : '')} className="card">
                <div className="pokemon-image-container">
                    <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>
                </div>
                
                <div className="pokemon-info">
                    <span className="pokemon-id">#{pokemon.id}</span>
                    {
                        (isMypokemon? ( <span className="pokemon-nickname">{pokemon.nickname}</span> ): null)
                    }
                    <span className="pokemon-name">{pokemon.name}</span>
                    {
                        (!isMypokemon ? ( <span className="pokemon-owned"> owned: {total}</span> ): null)
                    }
                </div>
                
                {
                    (isMypokemon ? ( <span className="mypokemon-id">{pokemon.mypokemonid}</span> ): null)
                }
            </Link>
        </>
    )
}

export default PokemonCard