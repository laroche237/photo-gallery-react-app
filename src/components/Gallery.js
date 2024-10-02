import React , { useState, useMemo }  from 'react';
import PhotoCard from './PhotoCard';
import './Gallery.css';

const Gallery = ({ photos, openModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

    // Extraire les catégories uniques
  const categories = useMemo(() => {
    const categorySet = new Set();
    categorySet.add('Toutes'); // Ajouter une option pour toutes les photos
    photos.forEach(photo => {
      if (Array.isArray(photo.category)) {
        photo.category.forEach(cat => categorySet.add(cat));
      } else {
        categorySet.add(photo.category);
      }
    });
    return Array.from(categorySet); // Convertir le Set en tableau
  }, [photos]);

  // Fonction pour filtrer les photos selon la catégorie sélectionnée
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'Toutes') {
      return photos;
    }
    return photos.filter(photo =>
      Array.isArray(photo.category)
        ? photo.category.includes(selectedCategory)
        : photo.category === selectedCategory
    );
  }, [selectedCategory, photos]);

  const [searchInput, setSearchInput]=useState("");


//gère les changements dans le champ de recherche
    const handleChange = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //filtre les photos
    const filteredPhoto= useMemo(() => {
      if(!searchInput)return[];//si la recherche est vide renvoyer un tableau vide
        const input = searchInput.toLowerCase();
        return photos.filter(photo => photo.title.toLowerCase().includes(input)); 
        
    }, [searchInput, photos]);


    return (
      <div className="gallery">
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} 
          className="search-input"/>

          {/* Affichage conditionnel basé sur la recherche*/}
              {searchInput? (filteredPhoto.length > 0?(
                filteredPhoto.map(photo => (
           <PhotoCard
           key={photo.id} 
           photo={photo} 
           openModal={openModal} />
                ))
            ): (<p>Aucune photo</p>)):null //rien n'est affiché tant qu'il n'y a pas de recherche
            }
        

              {/* Menu de sélection des catégories */}
      <div>
        <label htmlFor="category-filter">Filtrer par catégorie : </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

     
            {/* Affichage des photos filtrées */}
                  {filteredPhotos.map((photo) => (
          <PhotoCard
           key={photo.id} 
           photo={photo} 
           openModal={openModal} />
        ))}
      </div>
    );
  };
  
  export default Gallery;
  