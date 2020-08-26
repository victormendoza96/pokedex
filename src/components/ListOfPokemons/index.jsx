import React from 'react';
import CardPokemon from 'components/CardPokemon';
import CardLoader from 'components/CardLoader';
import CardMbLoader from 'components/CardMbLoader';
import './ListOfPokemons.css';
function ListOfPokemons({ pokemonsData, loading, setSelectPok }) {
  // <CardLoader />
  const cardsLoading = [];
  for (var i = 0; i === 4; i++) {
    cardsLoading.push(<CardLoader key={`cardLoading-${i}`} />);
  }

  return (
    <>
      {loading ? (
        <>
        <div className="listPokemon d-none-mobile">
          {[...Array(5)].map((x, i) => (
            <CardLoader key={`cardLoading-${i}`} />
          ))}
        </div>
        <div className="listPokemon d-only-mobile">
          {[...Array(5)].map((x, i) => (
            <CardMbLoader key={`cardMbLoading-${i}`} />
          ))}
        </div>
        </>
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
