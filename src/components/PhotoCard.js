import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photo, openModal }) => {
    return (
      <div className="photo-card" 
      onClick={() => openModal(photo)}>
        <img src={photo.src} alt={photo.title} />
        <div className="photo-title">{photo.title}</div>
      </div>
    );
  };
  
  export default PhotoCard;
  