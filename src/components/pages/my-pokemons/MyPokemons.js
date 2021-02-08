import React, { useState, useContext } from 'react';
import { useHistory } from'react-router-dom';
import { HiUserRemove } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

import { UpdateMyPokemons } from "../../../utils/PokemonService";
import { PokemonData } from '../../../contexts/MyPokemonContext';
import PokemonCard from "../../pokemon-card/PokemonCard";
import Modal from "../../modal/Modal";

import Pokedex from '../../../images/icon_pokedex.png';
import "./MyPokemons.css";


function Mypokemons() {
    const history = useHistory();
    const { mypokemons } = useContext(PokemonData);
    const [showModal, setShowModal] = useState(false);
    const [selectedPokemonID, setSelectedPokemonID] = useState(0);
    const released = true;

    function showConfirmation(mypokemonid) {
        setShowModal(true);
        setSelectedPokemonID(mypokemonid);
    }

    function onReleasePokemon() {
        mypokemons.splice(mypokemons.findIndex(p => p.mypokemonid === selectedPokemonID ),1);
        UpdateMyPokemons(mypokemons);
        setShowModal(false);
    }

    function toPokedex() {
        history.push('/pokedex');
    }

    return (
        <>
        <Modal title={'Release'} body={'Are you sure want to release this Pokemon?'} show={showModal} 
        onClose={() => setShowModal(false)} onReleasePokemon={onReleasePokemon} 
        released={released} />
        
        <div className="icon-pokedex-container" onClick={() => toPokedex()}>
            <img src={Pokedex} alt="Pokedex" title="Poke`dex" className="icon-pokedex"/>
        </div>
        <div className="grid-container"> 
        {
            mypokemons.length > 0 ? 
            mypokemons.map((pokemon, idx) => {
                return (<div className="card-container" key={pokemon.mypokemonid}>
                    <PokemonCard pokemon={pokemon} index={idx}/>
                    <div className="icon-release-box" title="Release Pokemon" onClick={() => showConfirmation(pokemon.mypokemonid)}>
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
