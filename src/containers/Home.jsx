import React from 'react';
import '../assets/styles/components/Home.css';

import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    return (
        <div className="pokedex-container">
            <PokemonSelector />
            <PokemonCard />
            <button className="view-gallery">Gallery</button>
            <button className="view-table">Table</button>
            <button className="view-list">List</button>
        </div>
    );
    
}
export default Home;