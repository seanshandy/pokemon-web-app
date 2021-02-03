import React, { useEffect, useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../../graphql/queries";
import PokemonCard from "../../pokemon-card/PokemonCard";

import "./PokemonList.css";


function PokemonList() {
    const [webData, setWebData] = useState();
    const [loadingState, setLoadingState] = useState(true);
    const [nextPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS);

    useEffect(() => {
        const localPokemon = localStorage.getItem('pokemon-data');
        const localOffset = localStorage.getItem('pokemon-data-offset');
        const localVisited= localStorage.getItem('pokemon-data-visited');
        const d = [];
        
        if (localPokemon) {
            d[0] = JSON.parse(localPokemon);
        }
        if (localOffset) {
            d[1] = JSON.parse(localOffset);
        }
        if (localVisited) {
            d[2] = JSON.parse(localVisited);
        }

        if(d.length > 0) {
            console.log(d);
            setWebData(d);
        } 

        if (!localVisited) {
            nextPokemons({ variables: { limit: 20, offset: 0 } });
        }

    }, []);

    useEffect(() => {
        if (data) {
            setLoadingState(true);

            let prevPokemons = (webData ? webData[0]: null);
            let updatedPokemons = [];

            if(prevPokemons) {
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
            d[2] = 'true';

            setWebData(d);
        }
    }, [data])

    useEffect(() => {
        if (webData) {
            localStorage.setItem('pokemon-data', JSON.stringify(webData[0]));
            localStorage.setItem('pokemon-data-offset', JSON.stringify(webData[1]));
            localStorage.setItem('pokemon-data-visited', 'true');
            setLoadingState(false);
        }
    }, [webData])

    if (loadingState) {
        return <h1> Loading... </h1> ;
    }

    return (
        <>
            <div className="container c-page">
                { webData ? 
                <>
                    <div className="grid-container"> 
                    { webData[0].map((pokemon) => {
                        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    }) }  
                    </div> 

                    <div className="btn">
                        <button onClick={() => nextPokemons({ variables: { limit: 20, offset: webData[1] } })}>Load More</button>
                    </div>
                </>
                : <div> </div>
                }
            </div>
        </>
    )
}

export default PokemonList
