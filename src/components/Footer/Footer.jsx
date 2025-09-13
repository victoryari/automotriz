import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>AutoRepuestos Victor</h3>
          <p>Los mejores repuestos para tu vehículo</p>
          <p>📍 Dirección: Av. Principal #123</p>
          <p>📞 Teléfono: (123) 456-7890</p>
          <p>✉️ Email: info@autorepuestosvictor.com</p>
        </div>
        
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#nosotros">Sobre Nosotros</a></li>
          </ul>
        </div>
        
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 AutoRepuestos Victor. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;