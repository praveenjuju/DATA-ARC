// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '10px', color: 'white', display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <a href="#home" style={{ color: 'white' }}>Home</a>
      <a href="#about" style={{ color: 'white' }}>About</a>
      <a href="#projects" style={{ color: 'white' }}>Projects</a>
      <a href="#contact" style={{ color: 'white' }}>Contact</a>
    </nav>
  );
}

export default Navbar;
