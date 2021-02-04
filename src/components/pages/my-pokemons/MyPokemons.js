import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

import PokemonCard from "../../pokemon-card/PokemonCard";
import "./MyPokemons.css";


function Mypokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const localPokemon = localStorage.getItem('my-pokemon');
    let pokemonData = localPokemon ? JSON.parse(localPokemon) : null;

    useEffect(() => {
        if(pokemonData) {
            setPokemons(pokemonData);
        } 
        setLoadingState(false);
    }, []);

    function ReleasePokemon(mypokemonid) {
        setLoadingState(true);
        pokemonData.splice(pokemonData.findIndex(p => p.mypokemonid === mypokemonid),1);

        localStorage.setItem('my-pokemon', JSON.stringify(pokemonData));
        setPokemons(pokemonData);

        setLoadingState(false);
    }

    useEffect(() => {
    }, [loadingState]);

    return (
        <>
        <div className="grid-container"> 
        {
            loadingState ? <h1>Loading...</h1> :
            pokemons.length > 0 ?
            pokemons.map((pokemon) => {
                return (<div className="card-container" key={pokemon.mypokemonid}>
                    <PokemonCard pokemon={pokemon} />
                    <div className="release-icon-box" onClick={() => ReleasePokemon(pokemon.mypokemonid)}>
                        <IconContext.Provider value={{ className:".release-icon" }}>
                            <FaSignOutAlt />
                        </IconContext.Provider>
                    </div>
                </div>)
            }) : <h1>Let's Catch Some Pokemon!</h1>
        }
        </div> 
    </>
    )
}

export default Mypokemons
