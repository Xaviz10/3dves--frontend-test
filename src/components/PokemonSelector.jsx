import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, fetchSpeciesPokemonCard } from '../actions';

import '../assets/styles/components/PokemonSelector.css';

import PokemonGallery from './PokemonGallery';
import PokemonTable from './PokemonTable';
import PokemonList from './PokemonList';


const PokemonSelector = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPokemons(data.pokemons.length));
        dispatch(fetchSpeciesPokemonCard(1));
    }, []);

    if (!data.loading) {
        switch (data.view) {
            case 1:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonGallery />
                    </div>
                );
            case 2:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonTable />
                    </div>
                );
            case 3:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonList />
                    </div>
                );
        }
        
    } else {
        switch (data.view) {
            case 1:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonGallery />
                    </div>
                );
            case 2:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonTable />
                    </div>
                );
            case 3:
                return (
                    <div className="pokemon-selector-container">
                        <PokemonList />
                    </div>
                );
        }
    }
    
};

export default PokemonSelector;