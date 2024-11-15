import React from 'react';
import "./Body.css";

const Body = ({ children ,para}) => {
  return (
    <div>
      <div className="bg">
        <div className="arrow">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <p>{para}</p>
        {children}
      </div>
    </div>
  );
};

export default Body;
