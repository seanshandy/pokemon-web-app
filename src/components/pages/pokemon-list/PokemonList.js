import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../../graphql/queries";


function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [firstload, setFirstLoad] = useState('0');
    const [loadingState, setLoadingState] = useState(true);
    const [nextPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS);

    useEffect(() => {
        const localPokemon = localStorage.getItem('pokemon-data');
        if (localPokemon) {
            setPokemonData(JSON.parse(localPokemon));
            setLoadingState(false);
        }

        const localOffset = localStorage.getItem('pokemon-data-offset');
        if (localOffset) {
            setOffset(JSON.parse(localOffset));
        }

        const localFirstload = localStorage.getItem('pokemon-data-firstload');
        if (localFirstload) {
            setFirstLoad(JSON.parse(localFirstload));
        }
        
        if (localFirstload === '0' || localFirstload === null) {
            nextPokemons({ variables: { limit: 20, offset: offset } });
            setFirstLoad(1);
            localStorage.setItem('pokemon-data-firstload', '1');
        }

    }, [])

    useEffect(() => {
        if (data) {
            console.log(data);
            let prevPokemons = pokemonData;
            let updatedPokemons = [];

            if(prevPokemons) {
                prevPokemons.forEach(p => {
                    updatedPokemons.push(p)
                });
            }

            data.pokemons.results.forEach(p => {
                updatedPokemons.push(p)
            })

            setPokemonData(updatedPokemons);
            localStorage.setItem('pokemon-data', JSON.stringify(updatedPokemons));

            setOffset(data.pokemons.nextOffset);
            localStorage.setItem('pokemon-data-offset', JSON.stringify(data.pokemons.nextOffset));

            setLoadingState(false);
        }
    }, [data])

    return (
        <>
            <div className="container">
                { loadingState ? <h1 > LOADING... </h1> : ( pokemonData.map((pokemons) => (<h1 key={pokemons.id} data={pokemons}> {pokemons.name} </h1>)) )
                }
                <div className="btn">
                    <button onClick={() => nextPokemons({ variables: { limit: 20, offset: offset } })}>Load More</button>
                </div>
            </div>
        </>
    )
}

export default PokemonList
