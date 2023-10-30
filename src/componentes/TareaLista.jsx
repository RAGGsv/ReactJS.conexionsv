import React, { useState } from 'react';

function TareaLista() {
  const [tareas, setTareas] = useState(['Hacer la compra', 'Limpiar la casa', 'Hacer ejercicio']);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleNuevaTareaChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(''); // Limpiamos el campo de entrada
    }
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleNuevaTareaChange}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
    </div>
  );
}

export default TareaLista;
