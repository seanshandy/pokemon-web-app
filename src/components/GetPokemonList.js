import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "../graphql/queries";

function GetPokemonList() {
    const limit = 5;
    const offset = 2;

    const { error, loading, data} = useQuery(LOAD_POKEMONS, {
        variables: { limit: limit, offest: offset },
      });
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        setPokemons(data? data.pokemons.results: []);
    }, [data])  

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <>
        <div>
            {pokemons.map((pokemons) => <h1 key={pokemons.id} data={pokemons} > {pokemons.name} </h1>)}
        </div>
        </>
    )
}

export default GetPokemonList
