import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/App.css'

import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

import Header from '../components/Header';



const App = () => {
    return (
        <BrowserRouter >
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter >
    );
};


export default App;