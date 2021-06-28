import Axios from 'axios';


export const fetchSpeciesPokemonCard = (index) => {
    return async (dispatch) => {

        // dispatch({
        //     type: 'FETCH_SPECIES_POKEMON_REQUEST'
        // });

        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index}/`);
        
        console.log(response.data)

        dispatch({
            type: 'FETCH_SPECIES_POKEMON',
            payload: response.data
        })
    }
}

export const fetchPokemons = (index) => {
    return async (dispatch) => {

        //Set Loading of Pokemons
        dispatch({
            type: 'FETCH_POKEMONS_REQUEST'
        });

        let pokemons = [];
        for (let i = index + 1 ; i <= index+10; i++) {
            const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            pokemons.push(response.data);
        }

        // Dispatch the next 10 pokemons
        dispatch({
            type: 'FETCH_POKEMONS',
            payload: pokemons
        })
    }
}

export const updatePokemonCardId = (index) =>  {
    console.log('Index ID', index);
    return (dispatch) => {

        dispatch({
            type: 'UPDATE_POKEMON_CARD_ID',
            payload: index,
        })
    }
};

export const updateIndexPokemons = payload => ({
    type: 'UPDATE_INDEX_POKEMONS',
    payload,
});