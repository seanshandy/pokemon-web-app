import React from 'react';
import { Link } from "react-router-dom";


import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
    const total = 100;
    
    return (
        <Link  to={'/pokemon-detail/' + pokemon.name} className="card">
                <div className="pokemon-image-container">
                    <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>
                </div>
                <div className="pokemon-info">
                    <p className="pokemon-id">#{pokemon.id}</p>
                    <p className="pokemon-name">{pokemon.name}</p>
                    <p className="pokemon-owned"> owned: {total}</p>
                </div>
        </Link>
    )
}

export default PokemonCard
