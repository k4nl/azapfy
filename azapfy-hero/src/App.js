import React from 'react';
import HerosProvider from './context/HerosProvider';
import Header from './components/Header';
import Filters from './components/Filters';
import HerosRow from './components/HerosRow';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <HerosProvider>
      <Header />
      <Filters />
      <HerosRow />
      <Footer />
    </HerosProvider>
  );
}

export default App;
