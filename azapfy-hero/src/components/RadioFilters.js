import React from "react";

const RadioFilters = ({ props }) => {
  const { type, value, handler, index } = props;
  return (
    <div className="input-radio-box">
      <input
        id={`${type}-input-filter-${index}`}
        type="radio"
        name={ type }
        value={ value }
        onChange= { handler }
        className="input-radio"
      />
      <label
        className="label-radio"
        htmlFor={ type }
        data-testid={`${type}-label-filter-${index}`}
      >
        { value }
      </label>
  </div>
  )
}

export default RadioFilters;