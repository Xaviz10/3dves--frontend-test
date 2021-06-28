import React from 'react';
import '../assets/styles/components/Home.css';

import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    return (
        <div className="pokedex-container">
            <PokemonSelector />
            <PokemonCard />
        </div>
    );
    
}
export default Home;