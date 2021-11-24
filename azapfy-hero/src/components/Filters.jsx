import React, { useState, useContext } from 'react';
import HerosContext from '../context/HerosContext';
import RadioFilters from './RadioFilters';
import './filters.css'

const Filters = () => {

  const { handleClick } = useContext(HerosContext);

  const [heroName, setHeroName] = useState('');
  const [race, setRace] = useState('');
  const [filters, setFilters] = useState({});
  const [disabled, setDisabled] = useState(true);

  const genderTypes = ['male', 'female'];
  const alignmentTypes = ['good', 'bad', 'neutral'];

  const removeObjFromFilter = (value, objkey) => {
    if(value.length === 0) {
      let state = {...filters};
      delete state[objkey];
      setFilters(state);
    }
    if(value.length === 0 && Object.keys(filters).length === 1) {
      setDisabled(true)
    }
  }

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFilters({...filters, [name]: value });
    if (name === 'gender') {
      setFilters(({appearance}) => (
        {...filters, appearance: { ...appearance, [name]: value } }
      ));
      setDisabled(false);
    }
    if (name === 'alignment') {
      setFilters({...filters, biography: { [name]: value } });
      setDisabled(false);
    }
    if (name === 'name') {
      setHeroName(value);
      setDisabled(false);
      removeObjFromFilter(value, 'name')
      
    }
    if (name === 'race') {
      setRace(value);
      setDisabled(false);
      setFilters(({appearance}) => (
        {...filters, appearance: { ...appearance, [name]: value } }
      ));
      removeObjFromFilter(value, 'race');
    }
  };

  return (
    <div className="d-flex flex-column filter-box">
      <div className="d-flex justify-content-center by-text">
        <div className="input-text-box">
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            name="name"
            value={ heroName }
            onChange= { handleChange }
          />
        </div>
        <div className="input-text-box">
          <label htmlFor="race">Race: </label>
          <input 
            type="text"
            name="race"
            value={ race }
            onChange= { handleChange }
          />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <form className="d-flex input-form-box">
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
        <form className="d-flex input-form-box">
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
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          id="filter"
          disabled={ disabled }
          className="btn btn-success mt-3 mx-3"
          onClick={ () => handleClick({type: 'filter', filters,}) }
        >
          Filter
        </button>
        <button
          type="button"
          id="clear"
          className="btn btn-warning mt-3 mx-3"
          onClick={ () =>  handleClick({type: 'clear'}) }
        >
          Refresh
        </button>
      </div>
    </div>
  )
}

export default Filters;

