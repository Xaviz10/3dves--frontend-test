import React from 'react';
import { useDispatch} from 'react-redux';
import '../assets/styles/components/Home.css';

import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/PokemonCard';
import { selectGalleryView, selectTableView, selectListView } from '../actions';

const Home = () => {
    const dispatch = useDispatch();

    const handleGalleryView = () => {
        dispatch(selectGalleryView());
    }

    const handleTableView = () => {
        dispatch(selectTableView());
    }

    const handleListView = () => {
        dispatch(selectListView());
    }

    return (
        <div className="pokedex-container">
            <PokemonSelector />
            <PokemonCard />
            <button className="view-gallery" onClick={() => handleGalleryView()}>Gallery</button>
            <button className="view-table" onClick={() => handleTableView()}>Table</button>
            <button className="view-list" onClick={() => handleListView()}>List</button>
        </div>
    );
    
}
export default Home;