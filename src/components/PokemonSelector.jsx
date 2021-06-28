import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, fetchSpeciesPokemonCard } from '../actions';

import '../assets/styles/components/PokemonSelector.css';

import PokemonGallery from './PokemonGallery';
import PokemonTable from './PokemonTable';


const PokemonSelector = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPokemons(data.pokemons.length));
        dispatch(fetchSpeciesPokemonCard(1));
    }, []);

    if (!data.loading) {
        return (
            <div className="pokemon-selector-container">
                <PokemonTable />
                {/* <PokemonGallery /> */}
            </div>
        );
    } else {
        return (
            <div className="pokemon-selector-container">
                <PokemonTable />
                {/* <PokemonGallery /> */}
                <h1>Loading...</h1>
            </div>
        );
    }
    
};

export default PokemonSelector;