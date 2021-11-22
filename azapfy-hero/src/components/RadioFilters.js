import React from "react";

const RadioFilters = ({ props }) => {
  const { type, value, handler } = props;
  return (
    <div>
      <input
        type="radio"
        name={ type }
        value={ value }
        onChange= { handler }
      />
      <label htmlFor={ type }>{ value }</label>
  </div>
  )
}

export default RadioFilters;