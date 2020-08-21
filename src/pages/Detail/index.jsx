import React, { useContext, useEffect, useState } from 'react';
import PokContect from 'context/PokemonContex';
import getPokemon from 'services/getPokemon';

export default function Detail({ params }) {
  const { PokemonsCTX, setPokemonsCTX } = useContext(PokContect);
  const [loadingPok, setLoadingPok] = useState(true);

  useEffect(() => {
    // const getPokemonDetail = async () => {
    if (!PokemonsCTX) {
      getPokemon(params.name).then(pokemon => {
        setPokemonsCTX(pokemon);
        setLoadingPok(false);
      });
    }
    // };

    // getPokemonDetail();
  }, [params, PokemonsCTX, setPokemonsCTX, setLoadingPok]);
  // console.log(PokemonsCTX);
  console.log(loadingPok);
  return (
    <>
      {loadingPok ? (
        'cargando menor'
      ) : (
        <>
          <div className="DetailPage">{PokemonsCTX.name}</div>
        </>
      )}
    </>
  );
}
