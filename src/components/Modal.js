import React from 'react';
import './Modal.css';

const Modal = ({ photo, closeModal }) => {
    if (!photo) return null;
  
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content"
         onClick={(e) => e.stopPropagation()}>
          <img src={photo.src} alt={photo.title} />
          <div className="modal-title">{photo.title}</div>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  