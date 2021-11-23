import React from 'react';
import PlanetsProvider from './context/HerosProvider';
import Header from './components/Header';
import Filters from './components/Filters';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <PlanetsProvider>
      <Header />
      <Filters />
      <Cards />
    </PlanetsProvider>
  );
}

export default App;
