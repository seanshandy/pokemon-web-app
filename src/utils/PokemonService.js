export async function GetMyPokemons  () {
    return localStorage.getItem('my-pokemon') ? JSON.parse(localStorage.getItem('my-pokemon')) : [];
}

export async function GetLastOffset () {
    return localStorage.getItem('pokemon-last-offset') ? JSON.parse(localStorage.getItem('pokemon-last-offset')) : 0;
}


export function UpdateMyPokemons (mypokemons) {
    localStorage.setItem('my-pokemon', JSON.stringify(mypokemons));
}

export function UpdateLastOffset (lastoffset) {
    localStorage.setItem('pokemon-last-offset', JSON.stringify(lastoffset));
}
