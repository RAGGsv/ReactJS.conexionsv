import React, { useState } from 'react';

function Form() {
    const [usuario, setUsuario] = useState({ nombre: '', email: '', contraseña: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando formulario', usuario);

    if (usuario.nombre === '' || usuario.email === '' || usuario.contraseña === '') {
      setMensaje('Por favor, completa todos los campos');
    } else {
      setMensaje('Formulario enviado con éxito');
    }
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={usuario.contraseña}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}
export default Form;
