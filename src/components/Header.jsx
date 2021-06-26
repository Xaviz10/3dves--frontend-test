import React from 'react';
import '../assets/styles/components/Header.css';
import { Link } from 'react-router-dom';
import PokemonLogo from '../assets/static/icons/pokemon-logo.svg';


const Header = () => {
    return (
        <header className="header">
            <Link to="/" >
                <img src={PokemonLogo} alt="Logo Pokémon" />
            </Link>
        </header>
    );
}


export default Header;