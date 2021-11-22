import React, { useState, useContext } from 'react';
import HerosContext from '../context/HerosContext';
import RadioFilters from './RadioFilters';

const Filters = () => {

  const { handleClick } = useContext(HerosContext);

  const [name, setName] = useState('');
  const [gender, setGenre] = useState('Default');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');

  const genderTypes = ["Male", "Female", "Default"];
  const alignmentTypes = ["good", "bad", "default"]

  const handleChange = ({ target }) => {

    const { value } = target;
    if(target.name === 'gender-input') {
      setGenre(value)
    }
    if(target.name === 'race-input') {
      setRace(value)
    }
    if(target.name === 'alignment-input') {
      setAlignment(value)
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="name-input">Name</label>
        <input 
          type="text"
          name="name-input"
          value={ name }
          onChange= { handleChange }
        />
      </div>
      <div>
        <label htmlFor="race-input">Race</label>
        <input 
          type="text"
          name="race-input"
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
        onClick={ handleClick }
      >
        Filter
      </button>
      <button
        type="button"
        id="clear"
        onClick={ handleClick }
      >
        Clear
      </button>
    </div>
  )
}

export default Filters;

