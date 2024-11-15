// CustomSelectOrRadio.js
import React from 'react';
import './CustomSelect.css';

// This component decides which type of selection to render based on `type` prop
const CustomSelect = ({
  type,            // 'radio' or 'select'
  name,            // For radio buttons, name of the group
  options,         // Array of options { value, label }
  value,           // Selected value
//   onChange,        // Event handler for selection change
  placeholder,     // Placeholder text for select
}) => {
  // Render radio buttons
  if (type === 'radio') {
    return (
      <div className="radio-container">
        {options.map((option) => (
          <label key={option.value} className="custom-radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
           
              className="custom-radio"
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

  // Render select dropdown
  if (type === 'select') {
    return (
      <div className="select-container">
        <select
          className="custom-select"
          value={value}
        //   onChange={onChange}
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
