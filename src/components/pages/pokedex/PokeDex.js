import React, { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../../graphql/queries";
import PokemonCard from "../../pokemon-card/PokemonCard";

import "./PokeDex.css";
import Button from "../../button/Button";


function PokemonList() {
    const [webData, setWebData] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [nextPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS);

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

        if(d.length > 0) {
            setWebData(d);
        } 

        if (!localOffset && loadingState) {
            nextPokemons({ variables: { limit: 20, offset: 0} });
        }

    }, []);

    useEffect(() => {
        if (data && loadingState) {

            let prevPokemons = (webData.length > 0 ? webData[0]: null);
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
            localStorage.setItem('pokemon-data', JSON.stringify(webData[0]));
            localStorage.setItem('pokemon-data-offset', JSON.stringify(webData[1]));
            setLoadingState(false);
        }
    }, [webData])

    function loadMore(offset) {
        const localOffset = localStorage.getItem('pokemon-data-offset');

        if (offset === JSON.parse(localOffset)) {
            setLoadingState(true);
            nextPokemons({ variables: { limit: 20, offset:  offset} });
        } else {
            const localPokemon = localStorage.getItem('pokemon-data');
            const localOffset = localStorage.getItem('pokemon-data-offset');
            const d = [];
            d[0] = JSON.parse(localPokemon);
            d[1] = JSON.parse(localOffset);

            setWebData(d);
        }
    }

    // if (loadingState) {
    //     return <h1> Loading... </h1> ;
    // }

    return (
        <>
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
