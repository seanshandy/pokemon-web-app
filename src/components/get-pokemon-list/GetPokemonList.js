import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/queries";


function GetPokemonList() {
    // const [pokemonData, setPokemonData] = useState([]);
    // const [offset, setOffset] = useState(0);
    // const [loading, setLoadingState] = useState(true);

    const { loading, error, data } = useQuery(GET_POKEMONS, {variables: { limit: 20, offset: 0}});


    if (loading) return (
        <>
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        </>
    )

    if (error) return (
        <>
            <h1 style={{ textAlign: 'center' }}>Something went wrong: {error.message}</h1>
        </>
    ) 

    return (
        <>
            <div>
                {
                    data.pokemons.results.map((pokemons) => (<h1 key={pokemons.id} data={pokemons}> {pokemons.name} </h1>))
                }
            </div>
        </>
    )
}

export default GetPokemonList
