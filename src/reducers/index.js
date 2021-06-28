
const initialState = {
    loading: true,
    view: 1,
    pokemon_card: 1,
    pokemon_species: {},
    pokemons: []
}
    
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POKEMONS':
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                loading: false,
            }
        
        case 'FETCH_POKEMONS_REQUEST':
            return {
                ...state,
                loading: true
            }
        
        case 'UPDATE_POKEMON_CARD_ID':
            return {
                ...state,
                pokemon_card: action.payload
            }
        case 'FETCH_SPECIES_POKEMON':
            return {
                ...state,
                pokemon_species: action.payload
            }
        case 'SELECT_GALLERY_VIEW':
            return {
                ...state,
                view: 1
            }
        case 'SELECT_TABLE_VIEW':

            return {
                ...state,
                view: 2
            }
        case 'SELECT_LIST_VIEW':

            return {
                ...state,
                view: 3
            }
        
        default:
            return state
    }

}

export default reducer;