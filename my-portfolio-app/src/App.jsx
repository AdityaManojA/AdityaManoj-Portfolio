// /src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

const Home = () => {
 return (
  <div className="min-h-screen"> 
   <Header />
      
      {/* 💥 FIX: ADD A SPACER HERE 
          This empty div takes up space equal to the header's height 
          and prevents the content from scrolling underneath the fixed header. 
          If h-20 is too much/little, try h-16 or h-24. 
      */}
      <div className="h-20" /> 
      
   <Hero /> 
   <ProjectsSection />
   <Footer />
  </div>
 );
};

function App() {
 return (
  <div className="App">
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;