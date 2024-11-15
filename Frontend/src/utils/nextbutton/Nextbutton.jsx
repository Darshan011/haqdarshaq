import React from 'react';
import './Nextbutton.css';

const Nextbutton = ({ value, next }) => {
  return (
    <div>
      <div className="containerbutton">
        <button className="nextbutton" type="button" onClick={next}>
          {value}
        </button>
      </div>
    </div>
  );
};

export default Nextbutton;
