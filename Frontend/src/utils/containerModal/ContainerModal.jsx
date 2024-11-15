import React from 'react';
import './ContainerModal.css';

const ContainerModal = ({ children }) => {
  return (
    <div >
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

export default ContainerModal;
