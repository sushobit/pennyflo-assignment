import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route exact path='/' Component={LoginPage}/>
      <Route exact path='/home' Component={HomePage}/>
      </Routes> 
       
  </BrowserRouter>    
  );
}

export default App;
