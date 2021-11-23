import React, { useState, useEffect } from 'react';
import HerosContext from './HerosContext';
import getHeros from '../services/herosApi';

const PlanetsProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHeros = async () => {
    const herosData = await getHeros();
    setData(herosData);
    setDataCopy(herosData);
    setLoading(false);
  }

  useEffect(() => {
    fetchHeros();
  },[]);



  const checkGender = (inputGender, heroGender) => {
    return heroGender.toLowerCase() === inputGender;
  }

  const checkRace = (inputRace, heroRace) => {
    let raceNotNull = heroRace === null ? '' : heroRace;
    return raceNotNull.toLowerCase().includes(inputRace);
  }

  const handleAppearance = (props, {appearance : { gender, race }}) => {
    if (props.length > 1) {
      props.sort();
      return (
        checkRace(props[1][1], race) && checkGender(props[0][1], gender)
      );
    }
    if(props[0][0] === 'race') {
      return checkRace(props[1][1], race)
    }
    return checkGender(props[0][1], gender)
  }

  const handlerFilter = (props) => {
    let filtered = data;
    const entries = Object.entries(props);
    for (const [key, value] of entries) {
      const property = Object.entries(value);
      filtered = filtered.filter((hero) => {
        const heroProp = hero[key][property[0][0]];
        const filterProp = value[property[0][0]];
        if(key === 'name') {
          return hero[key].toLowerCase().startsWith(value.toLowerCase());
        }
        if(key === 'appearance') {
          return handleAppearance(property, hero);
        }
        return heroProp.toLowerCase() === filterProp.toLowerCase();
      });
    }
    setDataCopy(filtered);
    setLoading(false);
  }

  const handleClick = (props) => {
    setLoading(true);
    const { filters } = props;
    if (props.type === 'filter') {
      handlerFilter(filters)
    } else {
      console.log('limpa os filtros e aparecem todos os herois')
    }
  } 


  return(
    <HerosContext.Provider
      value= { {
        data,
        handleClick,
        dataCopy,
        loading,
        setDataCopy,
      }}
      >
        {children}
      </HerosContext.Provider>
  )
}

export default PlanetsProvider;