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
            <div className="pokemon-table-container">
                <div className="pokemon-list">
                    
                    {data.pokemons.map(item => {
                        return (
                            <article>
                                {item.id}. {capitalizeFirstLetter(item.name)}
                                <ul key={item.id} className="pokemon-table__row"
                                    onClick={() => hadleUpdateCard(item.id)}>
                                    <li className="pokemon-preview__id pokemon-table__row">#{item.id}</li>
                                    <li className="pokemon-preview__name pokemon-table__row">{capitalizeFirstLetter(item.name)}</li>
                                    {item.types.map(typeItem => {
                                        return (
                                            <li key={typeItem.type.name} className="pokemon-type__item pokemon-table__row">{capitalizeFirstLetter(typeItem.type.name)}</li>
                                        );
                                    }
                                    )}

                                    {item.abilities.map(abilityItem => {
                                        return (
                                            <li key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</li>
                                        );
                                    }
                                    )}

                                </ul>
                            </article>
                            
                        );
                    }
                    )}
                </div>
                <UpdatePokemons />
            </div>
        );
    } else {
        return (
            <div className="pokemon-table-container">
                <div className="pokemon-list">
                    
                    {data.pokemons.map(item => {
                        return (
                            <article>
                                {item.id}. {capitalizeFirstLetter(item.name)}
                                <ul key={item.id} className="pokemon-table__row"
                                    onClick={() => hadleUpdateCard(item.id)}>
                                    <li className="pokemon-preview__id pokemon-table__row">#{item.id}</li>
                                    <li className="pokemon-preview__name pokemon-table__row">{capitalizeFirstLetter(item.name)}</li>
                                    {item.types.map(typeItem => {
                                        return (
                                            <li key={typeItem.type.name} className="pokemon-type__item pokemon-table__row">{capitalizeFirstLetter(typeItem.type.name)}</li>
                                        );
                                    }
                                    )}

                                    {item.abilities.map(abilityItem => {
                                        return (
                                            <li key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</li>
                                        );
                                    }
                                    )}

                                </ul>
                            </article>
                            
                        );
                    }
                    )}
                </div>
                <UpdatePokemons />
            </div>
        );
    }

}

export default PokemonList;