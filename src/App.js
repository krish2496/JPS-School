import React from 'react';
import './App.css';

import Contact from './components/ContactUs';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
    
      <main>
      <NavBar />
        <Contact />
      </main>
    </div>
  );
}

export default App;
