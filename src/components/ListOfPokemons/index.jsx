import React from 'react';
import CardPokemon from 'components/CardPokemon';
import CardLoader from 'components/CardLoader';
import './ListOfPokemons.css';
function ListOfPokemons({ pokemonsData, loading, setSelectPok }) {
  return (
    <>
      {loading ? (
        <CardLoader />
      ) : (
        <div className="listPokemon ">
          {pokemonsData.map(pokemon => (
            <CardPokemon
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites}
              id={pokemon.id.toString()}
              pokeinfo={pokemon}
              setSelectPok={setSelectPok}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ListOfPokemons;
