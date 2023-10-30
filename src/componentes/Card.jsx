import React from 'react';

const planes = [
    { nombre: 'Plan Básico', precio: '$10/mes', descripcion: 'Acceso a contenido básico.' },
    { nombre: 'Plan Estándar', precio: '$15/mes', descripcion: 'Acceso a contenido estándar.' },
    { nombre: 'Plan Premium', precio: '$20/mes', descripcion: 'Acceso a contenido premium y streaming en 4K.' },
  ];
  
  function Card() {
    return (
      <div className="container background-container">
        <h1>Planes de Suscripción</h1>
        <div className="row">
          {planes.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{plan.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{plan.precio}</h6>
                  <p className="card-text">{plan.descripcion}</p>
                  <button className="btn btn-primary">Más información</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
 

export default Card;