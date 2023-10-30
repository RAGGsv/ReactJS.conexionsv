import React, { useEffect, useState } from 'react';

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20'); // Obtenemos los datos de 20 Pokémon
        if (response.ok) {
          const data = await response.json();
          setPokemons(data.results);
        } else {
          console.error('Error al obtener los datos de la API');
        }
      } catch (error) {
        console.error('Error en la solicitud a la API:', error);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon Pokedex</h1>
      <table className="table table-bordered">
        <tbody>
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 5 }).map((_, colIndex) => {
                const index = rowIndex * 5 + colIndex;
                const pokemon = pokemons[index];
                return (
                  <td key={colIndex}>
                    {pokemon ? pokemon.name : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pokemon;
