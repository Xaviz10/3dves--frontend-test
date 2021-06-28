import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../actions';

import '../assets/styles/components/PokemonCard.css'


const PokemonCard = () => {

    const data = useSelector((state) => state);

    const capitalizeFirstLetter = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }

    const noSpecialCharacters = (string) => {
        return (string.replace("\f", " ").replace("\n", " "));
    }

    if (!data.loading) {
        const pokemonCard = data.pokemons[data.pokemon_card - 1];
        const pokemonSpeciesCard = data.pokemon_species;
        return (
            <article className="pokemon-card">
                <h1 className="pokemon-card__name">{capitalizeFirstLetter(pokemonCard.name)}</h1>
                <h2 className="pokemon-card__exp">{pokemonCard.base_experience} EXP</h2>
                <div className="pokemon-card__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.pokemon_card}.png")` }} ></div>
                <p className="pokemon-card__details">{`Height: ${(pokemonCard.height * 0.1).toFixed(2)}m; Weight: ${(pokemonCard.weight * 0.1).toFixed(2)}kg`}</p>
                <div className="pokemon-card__pokemon-type">
                    {pokemonCard.types.map(item => {
                        console.log(item.type.name)
                        return (
                            <h2 key={item.type.name} className="pokemon-type__item">{capitalizeFirstLetter(item.type.name)}</h2>
                        );
                    }
                    )}
                </div>
                <p className="pokemon-card__flavor-text">{`${noSpecialCharacters(pokemonSpeciesCard.flavor_text_entries[0].flavor_text)}
                ${noSpecialCharacters(pokemonSpeciesCard.flavor_text_entries[3].flavor_text)}`}</p>
                <div className="pokemon-card__stats">
                    <p className="stats__title"><span>Stats</span></p>
                    <div className="pokemon-card__stats-container">
                        <div className="stats__item">
                            <p className="stat--name">Hit Points</p>
                            <p className="stat--value">{pokemonCard.stats[0].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Attack</p>
                            <p className="stat--value">{pokemonCard.stats[1].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Defense</p>
                            <p className="stat--value">{pokemonCard.stats[2].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Special Attack</p>
                            <p className="stat--value">{pokemonCard.stats[3].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Special Defense</p>
                            <p className="stat--value">{pokemonCard.stats[4].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Speed</p>
                            <p className="stat--value">{pokemonCard.stats[5].base_stat}</p>
                        </div>
                    </div>

                </div>
                <div className="pokemon-card__abilities">
                    <p className="abilities__title"><span>Abilities</span></p>
                    <div className="pokemon-card__abilities-container">
                        <div className="abilities__item">
                            <p className="ability__name">
                                {pokemonCard.abilities[0].ability.name}
                            </p>
                        </div>
                        <div className="abilities__item">
                            <p className="ability__name">
                                {pokemonCard.abilities[1].ability.name}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="pokemon-card__id">{pokemonCard.id}</p>

            </article>
        );
    } else if(!data.loading && data.pokemons.length > 0) {
        const pokemonCard = data.pokemons[data.pokemon_card - 1];
        const pokemonSpeciesCard = data.pokemon_species;
        return (
            <article className="pokemon-card">
                <h1 className="pokemon-card__name">{capitalizeFirstLetter(pokemonCard.name)}</h1>
                <h2 className="pokemon-card__exp">{pokemonCard.base_experience} EXP</h2>
                <div className="pokemon-card__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.pokemon_card}.png")` }} ></div>
                <p className="pokemon-card__details">{`Height: ${(pokemonCard.height * 0.1).toFixed(2)}m; Weight: ${(pokemonCard.weight * 0.1).toFixed(2)}kg`}</p>
                <div className="pokemon-card__pokemon-type">
                    {pokemonCard.types.map(item => {
                        console.log(item.type.name)
                        return (
                            <h2 key={item.type.name} className="pokemon-type__item">{capitalizeFirstLetter(item.type.name)}</h2>
                        );
                    }
                    )}
                </div>
                <p className="pokemon-card__flavor-text">{`${noSpecialCharacters(pokemonSpeciesCard.flavor_text_entries[0].flavor_text)}
                ${noSpecialCharacters(pokemonSpeciesCard.flavor_text_entries[3].flavor_text)}`}</p>
                <div className="pokemon-card__stats">
                    <p className="stats__title"><span>Stats</span></p>
                    <div className="pokemon-card__stats-container">
                        <div className="stats__item">
                            <p className="stat--name">Hit Points</p>
                            <p className="stat--value">{pokemonCard.stats[0].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Attack</p>
                            <p className="stat--value">{pokemonCard.stats[1].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Defense</p>
                            <p className="stat--value">{pokemonCard.stats[2].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Special Attack</p>
                            <p className="stat--value">{pokemonCard.stats[3].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Special Defense</p>
                            <p className="stat--value">{pokemonCard.stats[4].base_stat}</p>
                        </div>
                        <div className="stats__item">
                            <p className="stat--name">Speed</p>
                            <p className="stat--value">{pokemonCard.stats[5].base_stat}</p>
                        </div>
                    </div>

                </div>
                <div className="pokemon-card__abilities">
                    <p className="abilities__title"><span>Abilities</span></p>
                    <div className="pokemon-card__abilities-container">
                        <div className="abilities__item">
                            <p className="ability__name">
                                {pokemonCard.abilities[0].ability.name}
                            </p>
                        </div>
                        <div className="abilities__item">
                            <p className="ability__name">
                                {pokemonCard.abilities[1].ability.name}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="pokemon-card__id">{pokemonCard.id}</p>

            </article>
        );
        
    } else {
        return (
            <article className="pokemon-card">
                <h1 className="pokemon-card__loading"> Loading... </h1>
            </article>
        );
    }
}

export default PokemonCard;