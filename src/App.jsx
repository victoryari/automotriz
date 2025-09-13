import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Productos from './components/Productos/Productos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <h2>Bienvenido a AutoRepuestos Victor</h2>
            <p>Los mejores repuestos automotrices con garantía de calidad y los precios más competitivos del mercado</p>
            <button className="cta-button">Ver Catálogo</button>
          </div>
        </section>
        <Productos />
      </main>
      <Footer />
    </div>
  );
}

export default App;