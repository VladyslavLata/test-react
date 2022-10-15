import { useState } from 'react';

export function FormSearchPokemon({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const changePokemonName = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const searchPokemon = e => {
    if (pokemonName.trim() === '') {
      alert('Введите имя покемона');
      return;
    }
    e.preventDefault();
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={searchPokemon}>
      <label htmlFor="pokemonId">
        Search pokemon
        <input
          name="pokemon"
          id="pokemonId"
          type="text"
          value={pokemonName}
          onChange={changePokemonName}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
