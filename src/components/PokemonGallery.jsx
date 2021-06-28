import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemonCardId, fetchSpeciesPokemonCard } from '../actions';

import '../assets/styles/components/PokemonGallery.css';

import UpdatePokemons from './UpdatePokemons';


const PokemonGallery = () => {

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
            <div className="pokemon-gallery-container">
                {data.pokemons.map(item => {
                    return (
                        <article key={item.id} className="pokemon-gallery__pokemon-preview"
                        onClick={() => hadleUpdateCard(item.id) }>
                            <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png")` }} ></div>
                            {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                            <p className="pokemon-preview__id">#{item.id}</p>
                            <h1 className="pokemon-preview__name">{capitalizeFirstLetter(item.name)}</h1>
                            <div className="pokemon-preview__pokemon-type">
                                {item.types.map(typeItem => {
                                    return (
                                        <h2 key={typeItem.type.name} className="pokemon-type__item">{capitalizeFirstLetter(typeItem.type.name)}</h2>
                                    );
                                }
                                )}
                            </div>
                        </article>
                    );
                }
                )}

                <UpdatePokemons />
            </div>
        );
    } else {
        return (
            <div className="pokemon-gallery-container">
                {data.pokemons.map(item => {
                    return (
                        <article key={item.id} className="pokemon-gallery__pokemon-preview"
                        onClick={() => hadleUpdateCard(item.id) }>
                            <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png")` }} ></div>
                            {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                            <p className="pokemon-preview__id">#{item.id}</p>
                            <h1 className="pokemon-preview__name">{item.name}</h1>
                            <h2 className="pokemon-preview__pokemon-type--principal">Flying</h2>
                            <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                        </article>
                    );
                }
                )}

                <UpdatePokemons />
            </div>
        );
    }


}



// const mapStateToProps = state => {
//     return {
//         pokemons: state.pokemons,
//         pokemons_in_view: state.pokemons_in_view,
//         pokemons_details: state.pokemons_details,
//     }
// }

// const mapDispatchToProps = {
//     getPokemonData,
//     updatePokemonsInView,
// }

// export default connect(mapStateToProps, mapDispatchToProps) (PokemonGallery);

export default PokemonGallery;