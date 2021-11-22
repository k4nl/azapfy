import React from "react";

const RadioFilters = ({ props }) => {
  const { type, value, handler } = props;
  return (
    <div>
      <input
        type="radio"
        name={ `${type}-input` }
        value={ value }
        onChange= { handler }
      />
      <label htmlFor={ `${type}-input` }>{ value }</label>
  </div>
  )
}

export default RadioFilters;