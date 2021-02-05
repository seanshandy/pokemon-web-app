import React, { useEffect, useState } from 'react';
import {  useHistory } from'react-router-dom';
import { HiUserRemove } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

import Pokedex from '../../../images/icon_pokedex.png';
import PokemonCard from "../../pokemon-card/PokemonCard";
import Modal from "../../modal/Modal";
import "./MyPokemons.css";


function Mypokemons() {
    const history = useHistory();

    const [pokemons, setPokemons] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [deleteID, setDeleteID] = useState([]);


    useEffect(() => {
        const localPokemon = localStorage.getItem('my-pokemon') ? localStorage.getItem('my-pokemon') : [];
        const pokemonData = localPokemon.length > 0 ? JSON.parse(localPokemon) : [];

        if(pokemonData.length > 0) {
            setPokemons(pokemonData);
        } 
        setLoadingState(false);
    }, []);

    function ReleasePokemon () {
        const  pokemonData = pokemons;
        pokemonData.splice(pokemonData.findIndex(p => p.mypokemonid === deleteID ),1);

        localStorage.setItem('my-pokemon', JSON.stringify(pokemonData));
        setPokemons(pokemonData);

        setLoadingState(false);
        setShowModal(false);
    }

    function deletePokemon (mypokemonid) {
        setLoadingState(true);

        setDeleteID(mypokemonid);
        setShowModal(true);
    }

    useEffect(() => {

    }, [loadingState])

    useEffect(() => {
        if(!showModal) {
            setLoadingState(false);
        }
    }, [showModal])

    function toPokedex() {
        history.push('/pokedex');
    }

    return (
        <>
        <Modal title={'Release Pokemon'} body={'Are you sure want to release this Pokemon?'} show={showModal} onClose={() => setShowModal(false)} onReleasePokemon={ReleasePokemon} release="release" />
       <div className="icon-pokedex-container" onClick={() => toPokedex()}>
            <img src={Pokedex} alt="Pokedex" className="icon-pokedex"/>
       </div>
        <div className="grid-container"> 
        {
            loadingState ? <h1>Loading...</h1> :
            pokemons.length > 0 ?
            pokemons.map((pokemon) => {
                return (<div className="card-container" key={pokemon.mypokemonid}>
                    <PokemonCard pokemon={pokemon} />
                    <div className="icon-release-box" onClick={() => deletePokemon(pokemon.mypokemonid)}>
                        <IconContext.Provider value={{ className:"icon-release" }}>
                            < HiUserRemove />
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
