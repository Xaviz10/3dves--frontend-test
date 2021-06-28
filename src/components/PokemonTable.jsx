import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemonCardId, fetchSpeciesPokemonCard } from '../actions';

import '../assets/styles/components/PokemonTable.css';


import UpdatePokemons from './UpdatePokemons';

const PokemonTable = () => {

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
                <div className="pokemon-table-grid">
                    <div className="pokemon-table__header">
                        <h1 className="pokemon-preview__id">Id</h1>
                        <h2 className="pokemon-preview__name">Name</h2>
                        <h3 className="pokemon-type__item-1">Type 1</h3>
                        <h3 className="pokemon-type__item-2">Type 2</h3>
                        <h3 className="pokemon-ability__item-1">Ability 1</h3>
                        <h3 className="pokemon-ability__item-2">Ability 2</h3>
                    </div>
                    {data.pokemons.map(item => {
                        return (
                            <div key={item.id} className="pokemon-table__row"
                                onClick={() => hadleUpdateCard(item.id)}>
                                <h1 className="pokemon-preview__id">#{item.id}</h1>
                                <h2 className="pokemon-preview__name">{capitalizeFirstLetter(item.name)}</h2>
                                {item.types.map(typeItem => {
                                    return (
                                        <h3 key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</h3>
                                    );
                                }
                                )}

                                {item.types.map(abilityItem => {
                                    return (
                                        <h3 key={abilityItem.type.name} className="pokemon-ability__item">{capitalizeFirstLetter(abilityItem.type.name)}</h3>
                                    );
                                }
                                )}

                            </div>
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
                <div className="pokemon-table-grid">
                    <div className="pokemon-table__row pokemon-table__header">
                        <h1 className="pokemon-preview__id">Id</h1>
                        <h2 className="pokemon-preview__name">Name</h2>
                        <h3 className="pokemon-type__item-1">Type 1</h3>
                        <h3 className="pokemon-type__item-2">Type 2</h3>
                        <h3 className="pokemon-ability__item-1">Ability 1</h3>
                        <h3 className="pokemon-ability__item-2">Ability 2</h3>
                    </div>
                    {data.pokemons.map(item => {
                        return (
                            <div key={item.id} className="pokemon-table__row"
                                onClick={() => hadleUpdateCard(item.id)}>
                                <h1 className="pokemon-preview__id">#{item.id}</h1>
                                <h2 className="pokemon-preview__name">{capitalizeFirstLetter(item.name)}</h2>
                                {item.types.map(typeItem => {
                                    return (
                                        <h3 key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</h3>
                                    );
                                }
                                )}

                                {item.types.map(abilityItem => {
                                    return (
                                        <h3 key={abilityItem.type.name} className="pokemon-ability__item">{capitalizeFirstLetter(abilityItem.type.name)}</h3>
                                    );
                                }
                                )}

                            </div>
                        );
                    }
                    )}
                </div>
                <UpdatePokemons />
            </div>
        );
    }
}

export default PokemonTable;