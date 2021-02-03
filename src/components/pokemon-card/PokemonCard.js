import React from 'react';
import { Link } from "react-router-dom";


import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
    const total = 100;

    const capitalize = (s) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    
    return (
        <Link  exact to='/' className="card">
                <div className="pokemon-image-container">
                    <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>
                </div>
                <div className="pokemon-info">
                    <p className="pokemon-id">#{pokemon.id}</p>
                    <p className="pokemon-name">{capitalize(pokemon.name)}</p>
                    <p className="pokemon-owned"> owned: {total}</p>
                </div>
        </Link>
    )
}

export default PokemonCard
