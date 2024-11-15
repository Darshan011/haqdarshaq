import React from 'react';
import './CustomSelect.css';

const CustomSelect = ({
  type,            // 'radio' or 'select'
  name,            // For radio buttons, name of the group
  options,         // Array of options { value, label }
  value,           // Selected value
  onChange,        // Event handler for selection change
  placeholder,     // Placeholder text for select
}) => {
  // Render radio buttons if type is 'radio'
  if (type === 'radio') {
    return (
      <div className="radio-container">
        {options.map((option) => (
          <label key={option.value} className="custom-radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}  // Ensures the radio button is selected if it matches the value
              onChange={onChange}  // onChange is used to update the selected value
              className="custom-radio"
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

  // Render select dropdown if type is 'select'
  if (type === 'select') {
    return (
      <div className="select-container">
        <select
          className="custom-select"
          value={value}
          onChange={onChange}  // onChange for the select dropdown
          aria-label={placeholder}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return null;
};

export default CustomSelect;
