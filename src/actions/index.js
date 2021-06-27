// import axios from 'axios';
// export const getPokemonsData = () => (dispatch) => {
//     axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
//         .then(response => {
//             dispatch({
//                 type: 'GET_POKEMONS_DATA',
//                 payload: response.data
//             });
//         });
    
// }


export const getPokemonData = payload => ({
    type: 'GET_POKEMON_DATA',
    payload,
});

export const updatePokemonsInView = payload => ({
    type: 'UPDATE_POKEMONS_IN_VIEW',
    payload,
});