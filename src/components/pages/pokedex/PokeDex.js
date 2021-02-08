/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from'react-router-dom';
import { useLazyQuery } from "@apollo/client";

import { GET_POKEMONS } from "../../../graphql/queries";
import { UpdateLastOffset } from "../../../utils/PokemonService";
import { PokemonData } from '../../../contexts/MyPokemonContext';
import PokemonCard from '../../pokemon-card/PokemonCard';
import Button from '../../button/Button';

import Box from '../../../images/icon_box.png';
import './PokeDex.css';


function PokemonList() {
    const limit = 20;
    const history = useHistory();

    const { lastOffset, setLastOffset } = useContext(PokemonData);
    const [getPokemonData,{ data }] = useLazyQuery(GET_POKEMONS, {variables: { limit: limit, offset: lastOffset}});

    function loadPokemons(o) {
        const ofst = Number(o < limit ? 0 : o);
        getPokemonData({ variables: { limit: limit, offset: ofst} });
    }

    function toBox() {
        history.push('/mypokemons');
    }

    useEffect(() => {
        loadPokemons(lastOffset === 0 ? 0 :(lastOffset - limit));
    }, [setLastOffset])

    useEffect(() => {
        if(data) {
            setLastOffset(data.pokemons.nextOffset);
            UpdateLastOffset(data.pokemons.nextOffset);
        }
    }, [data])

    return (
        <>
            <div className="icon-box-container" title="MyPokemons" onClick={() => toBox()}>
                <img src={Box} alt="box" className="icon-box"/>
            </div>

            <div className="grid-container"> 
                { data ? 
                    <>
                    {data.pokemons.results.map((pokemon) => {
                        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    })}
                    </>
                : <h1>Loading..</h1>
                } 
            </div> 

            <div className="pagination">
                { lastOffset-(limit*2) >= 0 ?
                    <div className="btn-prev" onClick={async () => loadPokemons(lastOffset-(limit*2))}>
                        <Button text="prev" size="size-modal"></Button>
                    </div> : null
                }
                <div className="btn-next" onClick={() => loadPokemons(data.pokemons.nextOffset)}>
                        <Button text="next" size="size-modal"></Button>
                </div>
            </div>
        </>
    )
}

export default PokemonList
