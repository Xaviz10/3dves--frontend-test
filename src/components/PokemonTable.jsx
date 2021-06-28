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
                <table className="pokemon-table">
                    <tr className="pokemon-table__header">
                        <td className="pokemon-preview__id ">Id</td>
                        <td className="pokemon-preview__name ">Name</td>
                        <td className="pokemon-type__item ">Type 1</td>
                        <td className="pokemon-type__item ">Type 2</td>
                        <td className="pokemon-preview_hp">HP</td>
                        <td className="pokemon-preview_atk">ATK</td>
                        <td className="pokemon-preview_df">DF</td>
                        <td className="pokemon-preview_satk">S-ATK</td>
                        <td className="pokemon-preview_sdf">S-DF</td>
                        <td className="pokemon-preview_spd">SPD</td>
                        <td className="pokemon-ability__item ">Ability 1</td>
                        <td className="pokemon-ability__item ">Ability 2</td>
                    </tr>
                    
                    {data.pokemons.map(item => {
                        return (
                            <tr key={item.id} className="pokemon-table__row"
                                onClick={() => hadleUpdateCard(item.id)}>
                                <td className="pokemon-preview__id pokemon-table__row">#{item.id}</td>
                                <td className="pokemon-preview__name pokemon-table__row">{capitalizeFirstLetter(item.name)}</td>
                                {item.types.map(typeItem => {
                                    return (
                                        <td key={typeItem.type.name} className="pokemon-type__item pokemon-table__row">{capitalizeFirstLetter(typeItem.type.name)}</td>
                                    );
                                }
                                )}

                                <td className="pokemon-preview_hp">{item.stats[0].base_stat }</td>
                                <td className="pokemon-preview_atk">{item.stats[1].base_stat }</td>
                                <td className="pokemon-preview_df">{item.stats[2].base_stat }</td>
                                <td className="pokemon-preview_satk">{item.stats[3].base_stat }</td>
                                <td className="pokemon-preview_sdf">{item.stats[4].base_stat }</td>
                                <td className="pokemon-preview_spd">{item.stats[5].base_stat }</td>

                                {item.abilities.map(abilityItem => {
                                    return (
                                        <td key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</td>
                                    );
                                }
                                )}

                            </tr>
                        );
                    }
                    )}
                </table>
                <UpdatePokemons />
            </div>
        );
    } else {
        return (
            <div className="pokemon-table-container">
                <table className="pokemon-table-grid">
                    <tr className="pokemon-table__header">
                        <td className="pokemon-preview__id ">Id</td>
                        <td className="pokemon-preview__name ">Name</td>
                        <td className="pokemon-type__item-1 ">Type 1</td>
                        <td className="pokemon-type__item-2 ">Type 2</td>
                        <td className="pokemon-ability__item-1 ">Ability 1</td>
                        <td className="pokemon-ability__item-2 ">Ability 2</td>
                    </tr>
                    
                    {data.pokemons.map(item => {
                        return (
                            <tr key={item.id} className="pokemon-table__row"
                                onClick={() => hadleUpdateCard(item.id)}>
                                <td className="pokemon-preview__id">#{item.id}</td>
                                <td className="pokemon-preview__name">{capitalizeFirstLetter(item.name)}</td>
                                {item.types.map(typeItem => {
                                    return (
                                        <td key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</td>
                                    );
                                }
                                )}

                                {item.abilities.map(abilityItem => {
                                    return (
                                        <td key={abilityItem.ability.name} className="pokemon-ability__item ">{capitalizeFirstLetter(abilityItem.ability.name)}</td>
                                    );
                                }
                                )}

                            </tr>
                        );
                    }
                    )}
                </table>
                <UpdatePokemons />
            </div>
        );
    }
}

export default PokemonTable;