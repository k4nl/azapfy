import React, { useState, useEffect } from 'react';
import HerosContext from './HerosContext';
import getHeros from '../services/herosApi';

const PlanetsProvider = ({ children }) => {

  const [data, setData] = useState([]);

  const fetchHeros = async () => {
    const herosData = await getHeros();
    setData(
      herosData[40],
    );
  }

  useEffect(() => {
    fetchHeros();
  },);


  return(
    <HerosContext.Provider
      value= { {
        data
      }}
      >
        {children}
      </HerosContext.Provider>
  )
}

export default PlanetsProvider;