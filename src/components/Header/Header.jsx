import React from 'react';
import './Header.css';

const Header = () => {
  const estudiante = "Victor Mamani"; // Reemplaza con tus datos

  return (
    <header className="header">
      <div className="header-container">
        <h1>Tienda de Repuesto de Autos: {estudiante}</h1>
        <nav className="nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;