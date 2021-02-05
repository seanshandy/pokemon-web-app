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

    const [webData, setWebData] = useState('');
    const [loadingState, setLoadingState] = useState(true);
    const [nextPokemons, { error, data }] = useLazyQuery(GET_POKEMONS);

    const limit = 12;

    function savetoLocal (data) {
        console.log(webData.results);
        localStorage.setItem('pokemon-last-offset', JSON.stringify(data.nextOffset));
    }

    function loadPokemons(offset) {
        const offsett = Number(offset < limit ? 0 : offset);
        setLoadingState(true);
        nextPokemons({ variables: { limit: limit, offset: offsett} });
    }

    function toBox() {
        history.push('/mypokemons');
    }

    useEffect(() => {
        let localOffset = 0;
        localOffset = localStorage.getItem('pokemon-last-offset');
        const offset = localOffset !== null ? (JSON.parse(localOffset) - limit): 0;

        setLoadingState(true);
        loadPokemons(offset)
    }, []);

    useEffect(() => {
        if (data) {
            setWebData(data.pokemons);
        }
    }, [data])

    useEffect(() => {
        if (webData) {
            savetoLocal(webData);
            setLoadingState(false);
        }
    }, [webData])

    // useEffect(() => {
    //     return null;
    // }, [loadingState])

    if (error) {
        return <h1> Error fetching data from </h1> ;
    }

    return (
        <>
        {
            !loadingState ?
            <>
            <div className="pagination">
                { webData.nextOffset-(limit*2) >= 0 ?
                    <div className="btn-prev" onClick={() => loadPokemons(webData.nextOffset-(limit*2))}>
                        <Button text="prev" size="size-modal"></Button>
                    </div> : null
                }
                <div className={`btn-next ${webData.nextOffset-(limit*2) <= 0 ? 'single-btn': ''}`}onClick={() => loadPokemons(webData.nextOffset)}>
                        <Button text="next" size="size-modal"></Button>
                </div>
            </div>
            </> : <h1>Loading...</h1>
        }
            <div className="icon-box-container" title="MyPokemons" onClick={() => toBox()}>
                <img src={Box} alt="box" className="icon-box"/>
            </div>
            <div className="grid-container"> 
                { webData !== '' && !loadingState ? 
                    <>
                    {webData.results.map((pokemon) => {
                        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    })}
                    </>
                : null
                } 
            </div> 
        </>
    )
}

export default PokemonList
