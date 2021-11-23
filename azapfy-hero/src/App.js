import React from 'react';
import PlanetsProvider from './context/HerosProvider';
import Header from './components/Header';
import Filters from './components/Filters';
import HerosRow from './components/HerosRow';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <PlanetsProvider>
        <Header />
        <Filters />
        <HerosRow />
    </PlanetsProvider>
  );
}

export default App;
