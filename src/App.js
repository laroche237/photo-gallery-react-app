import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import photos from './data/photos';
import './App.css';


function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className="App">
      <h1>Galerie de Photos</h1>    
      <Gallery photos={photos} openModal={openModal} />
      <Modal photo={selectedPhoto} closeModal={closeModal} />
    </div>
  );
}

export default App;
