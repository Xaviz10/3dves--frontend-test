import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemonCardId, fetchSpeciesPokemonCard } from '../actions';

import '../assets/styles/components/PokemonList.css';


import UpdatePokemons from './UpdatePokemons';


const PokemonList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const capitalizeFirstLetter = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }
    
    const hadleUpdateCard = (index) => {
        dispatch(updatePokemonCardId(index));
        dispatch(fetchSpeciesPokemonCard(index));
    }

    if (!data.loading) {
    
        return (
            <div className="pokemon-list-container">
                <ol className="pokemon-list">
                    {data.pokemons.map(item => {
                        return (
                            <li className="pokemon-list__details"
                            onClick={() => hadleUpdateCard(item.id)}>
                                {item.id}. {capitalizeFirstLetter(item.name)}
                                <ul key={item.id} className="pokemon-preview__type"> <span>Types:</span> 
                                    {item.types.map(typeItem => {
                                        return (
                                            <li key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</li>
                                        );
                                    }
                                    )}
                                </ul>
                                <ul key={item.id} className="pokemon-preview__type"> <span>Abilities:</span> 
                                    {item.abilities.map(abilityItem => {
                                        return (
                                            <li key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</li>
                                        );
                                    }
                                    )}
                                </ul>
                                
                            </li>
                        );
                    }
                    )}
                </ol>
                
                <UpdatePokemons />
            </div>
        );
    } else {
        return (
            <div className="pokemon-list-container">
                <ol className="pokemon-list">
                    {data.pokemons.map(item => {
                        return (
                            <li className="pokemon-list__details"
                            onClick={() => hadleUpdateCard(item.id)}>
                                {item.id}. {capitalizeFirstLetter(item.name)}
                                <ul key={item.id} className="pokemon-preview__type"> <span>Types:</span> 
                                    {item.types.map(typeItem => {
                                        return (
                                            <li key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</li>
                                        );
                                    }
                                    )}
                                </ul>
                                <ul key={item.id} className="pokemon-preview__type"> <span>Abilities:</span> 
                                    {item.abilities.map(abilityItem => {
                                        return (
                                            <li key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</li>
                                        );
                                    }
                                    )}
                                </ul>
                                
                            </li>
                        );
                    }
                    )}
                </ol>
                
                <UpdatePokemons />
            </div>
        );
    }

}

export default PokemonList;