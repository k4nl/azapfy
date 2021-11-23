import React from "react";

const RadioFilters = ({ props }) => {
  const { type, value, handler } = props;
  return (
    <div className="input-radio-box">
      <input
        type="radio"
        name={ type }
        value={ value }
        onChange= { handler }
        className="input-radio"
      />
      <label className="label-radio" htmlFor={ type }>{ value }</label>
  </div>
  )
}

export default RadioFilters;