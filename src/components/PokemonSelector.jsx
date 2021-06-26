import React from 'react';
import '../assets/styles/components/PokemonSelector.css';

import PokemonGallery from './PokemonGallery';


const PokemonSelector = () => {
    return (
        <div className="pokemon-selector-container">
            <PokemonGallery />
        </div>
    );
};

export default PokemonSelector;