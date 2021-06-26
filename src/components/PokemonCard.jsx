import React from 'react';
import '../assets/styles/components/PokemonCard.css'


const PokemonCard = () => {

    return (
        <article className="pokemon-card">
            <h1 className="pokemon-card__name">Charizard</h1>
            <h2 className="pokemon-card__exp">350 EXP</h2>
            <div className="pokemon-card__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
            <p className="pokemon-card__details">Genus; Height; Weight</p>
            <h2 className="pokemon-card__pokemon-type--principal">Fire</h2>
            <h2 className="pokemon-card__pokemon-type--secundary">Flying</h2>
            <p className="pokemon-card__flavor-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nesciunt dicta voluptatum magni. Ducimus, repudiandae.</p>
            <div className="pokemon-card__stats">
                <p className="stats__title"><span>Stats</span></p>
                <div className="pokemon-card__stats-container">
                    <div className="stats__item">
                        <p className="stat--name">Hit Points</p>
                        <p className="stat--value">60</p>
                    </div>
                    <div className="stats__item">
                        <p className="stat--name">Attack</p>
                        <p className="stat--value">80</p>
                    </div>
                    <div className="stats__item">
                        <p className="stat--name">Defense</p>
                        <p className="stat--value">40</p>
                    </div>
                    <div className="stats__item">
                        <p className="stat--name">Special Attack</p>
                        <p className="stat--value">150</p>
                    </div>
                    <div className="stats__item">
                        <p className="stat--name">Special Defense</p>
                        <p className="stat--value">80</p>
                    </div>
                    <div className="stats__item">
                        <p className="stat--name">Speed</p>
                        <p className="stat--value">100</p>
                    </div>
                </div>
                
            </div>
            <div className="pokemon-card__abilities">
                <p className="abilities__title"><span>Abilities</span></p>
                <div className="pokemon-card__abilities-container">
                    <div className="abilities__item">
                        <p className="ability__name">
                            blaze
                        </p>
                    </div>
                    <div className="abilities__item">
                        <p className="ability__name">
                            solar-power
                        </p>
                    </div>
                </div>                
            </div>
            <p className="pokemon-card__id">6</p>

        </article>
    );
}

export default PokemonCard;