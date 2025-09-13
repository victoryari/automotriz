import React from 'react';
import './Productos.css';
import frenos from "/src/img/frenos.png";
import Carrocería from '/src/img/carroceria.png';
import motor from '/src/img/motor.png';
import suspension from '/src/img/suspension.png';
import electrico from '/src/img/sistema.png';
import accesorios from '/src/img/accesorios.jpg';

const Productos = () => {
  const categorias = [
    {
      id: 1,
      nombre: 'Frenos y Discos',
      descripcion: 'Sistema de frenado completo',
      imagen: frenos
    },
    {
      id: 2,
      nombre: 'Motor y Transmisión',
      descripcion: 'Partes del motor y caja de cambios',
      imagen: motor
    },
    {
      id: 3,
      nombre: 'Suspensión',
      descripcion: 'Amortiguadores y resortes',
      imagen: suspension
    },
    {
      id: 4,
      nombre: 'Sistema Eléctrico',
      descripcion: 'Baterías y componentes eléctricos',
      imagen: electrico
    },
    {
      id: 5,
      nombre: 'Carrocería',
      descripcion: 'Piezas exteriores del vehículo',
      imagen: Carrocería
    },
    {
      id: 6,
      nombre: 'Interior',
      descripcion: 'Accesorios y componentes internos',
      imagen: accesorios
    }
  ];

  return (
    <section id="productos" className="productos">
      <div className="productos-container">
        <h2>Nuestros Productos</h2>
        <p className="productos-descripcion">
          Encuentra los mejores repuestos para tu vehículo con garantía de calidad
        </p>
        
        <div className="productos-grid">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="producto-card">
              <div className="producto-imagen">
                <img 
                  src={categoria.imagen} 
                  alt={categoria.nombre}
                  style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                />
              </div>
              <h3>{categoria.nombre}</h3>
              <p>{categoria.descripcion}</p>
              <button className="producto-btn">Ver Productos</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;