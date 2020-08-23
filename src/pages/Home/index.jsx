import React, { useState } from 'react';
import { Link } from 'wouter';
import ListOfPokemons from 'components/ListOfPokemons';
import PicPokemon from 'components/PicPokemon';
import usePokemonsData from 'hooks/usePokemonsData';

import './Home.css';

export default function Home({params}) {
  const ParamsPage = parseInt(params.page)

  const { pokemonsData, loadingPok, page, setPage } = usePokemonsData(ParamsPage);
  const [selectPok, setSelectPok] = useState();

  return (
    <>
      <div className="homeGrid">
        <ListOfPokemons pokemonsData={pokemonsData} loading={loadingPok} setSelectPok={setSelectPok} />
        <PicPokemon defaultPok={pokemonsData[0]} pokemonPick={selectPok} loading={loadingPok} />
        <Link to={`/${page - 1}`} onClick={() => setPage(page - 1)}>
          prev
        </Link>
        <Link to={`/${page + 1}`} onClick={() => setPage(page + 1)}>
          next
        </Link>
      </div>
    </>
  );
}
