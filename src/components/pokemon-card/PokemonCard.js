import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PokemonData } from '../../contexts/MyPokemonContext';
import './PokemonCard.css';


function PokemonCard({ pokemon , index}) {
    const isMypokemon = pokemon.mypokemonid ? true : false;
    const { mypokemons } = useContext(PokemonData);
    let total = 0 
    
    mypokemons.forEach((mypokemon) => {
        if(mypokemon.id === pokemon.id){
            total++;
        }
    });
        

    return (
        <>
            <Link to={'/pokemon/' + pokemon.name + (isMypokemon ? '/' + pokemon.mypokemonid : '')} className="card">
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
                        (!isMypokemon ? ( 
                            <>
                            <span className="pokemon-captured">captured:</span> <span className={`pokemon-total ${total > 0 ? "captured" : "not-captured"}`}>{total}</span> 
                            </>
                        ): null)
                    }
                </div>
                
                {
                    (isMypokemon ? ( <span className="mypokemon-id">{index + 1}</span> ): null)
                }
            </Link>
        </>
    )
}

export default PokemonCard
