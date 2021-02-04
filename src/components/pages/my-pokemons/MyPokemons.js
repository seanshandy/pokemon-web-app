import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

import PokemonCard from "../../pokemon-card/PokemonCard";
import Modal from "../../modal/Modal";
import "./MyPokemons.css";


function Mypokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState();
    let deletePokemonID = 0;
    const localPokemon = localStorage.getItem('my-pokemon') ? localStorage.getItem('my-pokemon') : [];
    let pokemonData = localPokemon.length > 0 ? JSON.parse(localPokemon) : [];

    useEffect(() => {
        if(pokemonData.length > 0) {
            setPokemons(pokemonData);
        } 
        setLoadingState(false);
    }, []);

    function ReleasePokemon () {
        pokemonData.splice(pokemonData.findIndex(p => p.mypokemonid === deletePokemonID ),1);
        localStorage.setItem('my-pokemon', JSON.stringify(pokemonData));
        setPokemons(pokemonData);

        setLoadingState(false);
        setShowModal(false);
    }

    function deletePokemon (mypokemonid) {
        setLoadingState(true);

        deletePokemonID = mypokemonid;
        setShowModal(true);
    }

    useEffect(() => {

    }, [loadingState])

    useEffect(() => {
        if(!showModal) {
            setLoadingState(false);
        }
    }, [showModal])

    return (
        <>
        <div className="grid-container"> 
        <Modal title={'Release Pokemon'} body={'Are you sure want to release this Pokemon?'} show={showModal} onClose={() => setShowModal(false)} onReleasePokemon={ReleasePokemon} release="release" />
        
        {
            loadingState ? <h1>Loading...</h1> :
            pokemons.length > 0 ?
            pokemons.map((pokemon) => {
                return (<div className="card-container" key={pokemon.mypokemonid}>
                    <PokemonCard pokemon={pokemon} />
                    <div className="icon-release-box" onClick={() => deletePokemon(pokemon.mypokemonid)}>
                        <IconContext.Provider value={{ className:"icon-release" }}>
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
