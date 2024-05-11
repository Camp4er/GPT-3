import React from 'react';
import './App.css';

import { Brand, CTA, Navbar } from './Components';
import { Footer, Blog, Possibility, Features, whatGPT3, Header } from './Container';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
