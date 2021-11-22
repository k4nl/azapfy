import React from 'react';
import PlanetsProvider from './context/HerosProvider';
import Header from './components/Header';
import Filters from './components/Filters';


function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Filters />
    </PlanetsProvider>
  );
}

export default App;
