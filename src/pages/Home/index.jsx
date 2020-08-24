import React, { useState } from 'react';
import { Redirect } from 'wouter';
import ListOfPokemons from 'components/ListOfPokemons';
import PicPokemon from 'components/PicPokemon';
import usePokemonsData from 'hooks/usePokemonsData';
import Button from 'components/Button';

import './Home.css';

export default function Home({ params }) {
  const ParamsPage = parseInt(params.page);

  const { pokemonsData, loadingPok, page, setPage, isError } = usePokemonsData(ParamsPage);
  const [selectPok, setSelectPok] = useState();

  if (!loadingPok && isError) return <Redirect to="/page/notFound" />;

  return (
    <>
      <div className="homeGrid">
        <ListOfPokemons pokemonsData={pokemonsData} loading={loadingPok} setSelectPok={setSelectPok} />
        <PicPokemon defaultPok={pokemonsData[0]} pokemonPick={selectPok} loading={loadingPok} />
        <div className="homeGrid_group">
          <Button to={`/${page - 1}`} event={() => setPage(page - 1)} text="prev" />

          <Button to={`/${page + 1}`} event={() => setPage(page + 1)} text="next" />
        </div>
      </div>
    </>
  );
}
