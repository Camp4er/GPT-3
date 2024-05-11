import React from 'react';
import './App.css';

import { Brand, CTA, Navbar } from './Components';
import { Footer, Blog, Possibility, Features, Header } from './Container'; // Removed 'whatGPT3'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      {/* Removed <whatGPT3 /> */}
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
