import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../actions';

const UpdatePokemons = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const handleFetchPokemons = (index) => {
        dispatch(fetchPokemons(index));
    }

    if (!data.loading && data.pokemons.length < 150) {
        return (
            <>
                <button onClick={() => handleFetchPokemons(data.pokemons.length) }> Show more...</button>
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
    
}

export default UpdatePokemons;