import React, { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import {  useHistory } from'react-router-dom';
import { GET_POKEMONS } from "../../../graphql/queries";

import PokemonCard from "../../pokemon-card/PokemonCard";
import Button from "../../button/Button";
import Box from '../../../images/icon_box.png';


import "./PokeDex.css";


function PokemonList() {
    const history = useHistory();

    const [webData, setWebData] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [nextPokemons, { error, data }] = useLazyQuery(GET_POKEMONS);

    const limit = 10;
    const maxSavedPokemonLocal = 100;

    function savetoLocal (data) {
        if(data[1] <= maxSavedPokemonLocal) {
            localStorage.setItem('pokemon-data', JSON.stringify(webData[0]));
            localStorage.setItem('pokemon-data-offset', JSON.stringify(webData[1]));
        }
    }

    function loadMore(offset) {
        setLoadingState(true);
        nextPokemons({ variables: { limit: limit, offset:  offset} });
    }

    function toBox() {
        history.push('/mypokemons');
    }

    useEffect(() => {
        const localPokemon = localStorage.getItem('pokemon-data');
        const localOffset = localStorage.getItem('pokemon-data-offset');
        const d = [];

        if (localPokemon) {
            d[0] = JSON.parse(localPokemon);
        }
        if (localOffset) {
            d[1] = JSON.parse(localOffset);
        }  
        if(d.length > 0 ) {
            setWebData(d);
        } 

        if (d.length === 0) {
            setLoadingState(true);
            nextPokemons({ variables: { limit: 10, offset: 0} });
        }
    }, []);

    useEffect(() => {
        if (data) {
            let prevPokemons = (webData.length > 0 ? webData[0]: []);
            let updatedPokemons = [];

            if(prevPokemons.length > 0) {
                prevPokemons.forEach(p => {
                    updatedPokemons.push(p)
                });
            }

            data.pokemons.results.forEach(p => {
                updatedPokemons.push(p)
            })

            const d = [];
            d[0] = updatedPokemons;
            d[1] = data.pokemons.nextOffset;

            setWebData(d);
        }
    }, [data])

    useEffect(() => {
        if (webData) {
            savetoLocal(webData);
            setLoadingState(false);
        }
    }, [webData])

    useEffect(() => {
        return null;
    }, [loadingState])

    if (error) {
        return <h1> Error fetching data from </h1> ;
    }

    return (
        <>
            <div className="icon-box-container" title="MyPokemons" onClick={() => toBox()}>
                <img src={Box} alt="box" className="icon-box"/>
            </div>
            <div className="grid-container"> 
                { webData.length > 0 ? 
                    <>
                    {webData[0].map((pokemon) => {
                        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    })}
                    </>
                : null
                } 
            </div> 

            { !loadingState ?
                <div className="load-more" onClick={() => loadMore(webData[1])}>
                    <Button text="load more"></Button>
                </div> : <h1>Loading...</h1>
            }
        </>
    )
}

export default PokemonList
