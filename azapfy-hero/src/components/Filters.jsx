import React, { useState, useContext } from 'react';
import HerosContext from '../context/HerosContext';
import RadioFilters from './RadioFilters';

const Filters = () => {

  const { handleClick } = useContext(HerosContext);

  const [heroName, setHeroName] = useState('');
  const [race, setRace] = useState('');
  const [filters, setFilters] = useState({});

  const genderTypes = ['male', 'female'];
  const alignmentTypes = ['good', 'bad', 'neutral'];

  const removeObjFromFilter = (value, objkey) => {
    if(value.length === 0) {
      let state = {...filters};
      console.log(state[objkey])
      delete state[objkey];
      setFilters(state);
    }
  }

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFilters({...filters, [name]: value });
    if (name === 'gender') {
      setFilters(({appearance}) => (
        {...filters, appearance: { ...appearance, [name]: value } }
      ));
    }
    if (name === 'alignment') {
      setFilters({...filters, biography: { [name]: value } });
    }
    if (name === 'name') {
      setHeroName(value);
      removeObjFromFilter(value, 'name')
    }
    if (name === 'race') {
      setRace(value)
      setFilters(({appearance}) => (
        {...filters, appearance: { ...appearance, [name]: value } }
      ));
      removeObjFromFilter(value, 'race');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          name="name"
          value={ heroName }
          onChange= { handleChange }
        />
      </div>
      <div>
        <label htmlFor="race">Race</label>
        <input 
          type="text"
          name="race"
          value={ race }
          onChange= { handleChange }
        />
      </div>
      <form>
        Gender:
        { genderTypes.map((type) => {
          return (
            <RadioFilters
              key={ type }
              props={ { type:'gender', value: type, handler: handleChange }}
            />
          );
        })
        }
      </form>
      <form>
        Alignment:
        { alignmentTypes.map((type) => {
          return (
            <RadioFilters
              key={ type }
              props={ { type:'alignment', value: type, handler: handleChange }}
            />
          );
        })
        }
      </form>
      <button
        type="button"
        id="filter"
        onClick={ () => handleClick({type: 'filter', filters,}) }
      >
        Filter
      </button>
      <button
        type="button"
        id="clear"
        onClick={ () =>  handleClick({type: 'clear'}) }
      >
        Clear
      </button>
    </div>
  )
}

export default Filters;

