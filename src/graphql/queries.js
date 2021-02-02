import { gql } from "@apollo/client";

export const LOAD_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            nextOffset
            prevOffset
            status
            message
            results {
                id
                url
                name
                image
            }
        }
    }
`