import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemonData, updatePokemonsInView } from '../actions';

import '../assets/styles/components/Home.css';

import useInitialState from '../hooks/useInitialState.js';
import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/PokemonCard';

const Home = (props) => {
    // const { pokemons, pokemons_in_view } = props;
    // // console.log(pokemons_in_view);
    // // console.log(pokemons.slice(pokemons_in_view, pokemons_in_view + 20))
    // const handleGetPokemonData = (props, pokemons, pokemons_in_view) => {
    //     pokemons.map(item => {
    //         fetch(item.url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 props.getPokemonData(data);
    //                 console.log(data);
    //                 props.updatePokemonsInView(pokemons_in_view + 20);
    //             });
    //     });
        
    // }

    // // const initial = useInitialState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150');
    // // console.log(initial)

    // useEffect(() => {
    //     handleGetPokemonData(props, pokemons.slice(pokemons_in_view, pokemons_in_view + 20), pokemons_in_view);
    // }, []);

    return (
        <div className="pokedex-container">
            <PokemonSelector />
            <PokemonCard />
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)