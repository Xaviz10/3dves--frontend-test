import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getPokemonData, updatePokemonsInView } from '../actions';

import '../assets/styles/components/PokemonGallery.css';


const PokemonGallery = (props) => {
    const [loading, setLoading] = useState(true);
    const { pokemons, pokemons_in_view } = props;
    // console.log(pokemons_in_view);
    // console.log(pokemons.slice(pokemons_in_view, pokemons_in_view + 20))
    const handleGetPokemonData = (props, pokemons, pokemons_in_view) => {
        pokemons.map(item => {
            fetch(item.url)
                .then(response => response.json())
                .then(data => {
                    props.getPokemonData(data);
                    console.log(data);
                    props.updatePokemonsInView(pokemons_in_view + 20);
                });
        });
    }

    useEffect(() => {
        handleGetPokemonData(props, pokemons.slice(pokemons_in_view, pokemons_in_view + 20), pokemons_in_view);
        setLoading(false);
    }, []);

    if (!loading) {
        return (
            <div className="pokemon-gallery-container">

                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
    
                <article className="pokemon-gallery__pokemon-preview">
                    <div className="pokemon-preview__image" style={{ backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")` }} ></div>
                    {/* <img clasName="pokemon-preview__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" /> */}
                    <p className="pokemon-preview__id">#6</p>
                    <h1 className="pokemon-preview__name">Charizard</h1>
                    <h2 className="pokemon-preview__pokemon-type--principal">Fire</h2>
                    <h2 className="pokemon-preview__pokemon-type--secundary">Flying</h2>
                </article>
            </div>
        );
    } else {
        return (
            <h1>Loading</h1>
        );
    }

}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        pokemons_in_view: state.pokemons_in_view,
        pokemons_details: state.pokemons_details,
    }
}

const mapDispatchToProps = {
    getPokemonData,
    updatePokemonsInView,
}

export default connect(mapStateToProps, mapDispatchToProps) (PokemonGallery);