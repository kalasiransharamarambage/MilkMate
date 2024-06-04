import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Animal from './AnimalDetails/Animal.jsx';
import Animal2 from './AnimalDetails/Animal2.jsx';
import Search from './AnimalDetails/Search.jsx';
import AnimalProfile from './AnimalDetails/AnimalProfile.jsx';
import AddAnimal from './AnimalDetails/AddAnimal.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Animal/>
    <Animal2/>
    <Search/>
    <AnimalProfile/>
    <AddAnimal/>
    
  </React.StrictMode>,
)
