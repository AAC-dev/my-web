import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
