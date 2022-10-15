import { useState, useEffect, useContext } from 'react';
import { myContext } from 'context/context';

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  // ctx - это контекст . сделат тут для примера. в коде не используется
  const ctx = useContext(myContext);
  console.log(ctx);
  // --------------------------------------
  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }
          return Promise.reject(
            new Error(`Error! Pokemon ${pokemonName} not found.`)
          );
        })
        .then(responsePokemon => {
          setPokemon(responsePokemon);
          setStatus('resolved');
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }, 1000);
  }, [pokemonName]);

  if (status === 'idle') {
    return <p>Введите имя покемона</p>;
  }

  if (status === 'pending') {
    return <p>Загружаем</p>;
  }

  if (status === 'rejected') {
    return <p>{error.message}</p>;
  }

  if (status === 'resolved') {
    return (
      <>
        <p>{pokemon.name}</p>
        <img
          width="240px"
          src={pokemon.sprites['front_default']}
          alt={pokemon.moves.name}
        />
      </>
    );
  }
};
