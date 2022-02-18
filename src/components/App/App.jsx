import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

const [gallery, setGallery] = useState([])

useEffect(() => {
  fetchGallery();
  }, [])

  const fetchGallery = () => {
    axios.get('/gallery')
        .then(response => {
            setGallery(response.data);
            console.log(gallery);
        }).catch(error => {
            console.log('Error fetching gallery');
        })


 }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
            gallery={gallery}
        />
      </div>
    );
}

export default App;
