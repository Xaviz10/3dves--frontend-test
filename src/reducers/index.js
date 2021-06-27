


const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_POKEMON_DATA':
            return {
                ...state,
                pokemons_details: [...state.pokemons_details, action.payload],
            }
        case 'UPDATE_POKEMONS_IN_VIEW':
            return {
                ...state,
                pokemons_in_view: action.payload,
            }
        default:
            return state
    }
}

export default reducer;