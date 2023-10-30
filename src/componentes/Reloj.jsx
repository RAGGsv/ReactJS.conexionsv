import React, { useState, useEffect } from 'react';

function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []); // Asegúrate de tener un arreglo vacío aquí
  
    return (
      <div>
        <p>Hora actual: {hora}</p>
      </div>
    );
  }

export default Reloj;