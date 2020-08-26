import React, { useState } from 'react';
import { Redirect } from 'wouter';
import usePokemonsData from 'hooks/usePokemonsData';
import Button from 'components/Button';
import ListOfPokemons from 'components/ListOfPokemons';
import PicPokemon from 'components/PicPokemon';

import './Home.css';

export default function Home({ params }) {
  const ParamsPage = parseInt(params.page);

  const { pokemonsData, loadingPok, page, setPage, isError, hasNext, hasPrevius } = usePokemonsData(ParamsPage);
  const [selectPok, setSelectPok] = useState();

  if (!loadingPok && isError) return <Redirect to="/page/notFound" />;

  return (
    <>
      <div className="homeGrid">
        <div className="homeGrid__list">
          <ListOfPokemons pokemonsData={pokemonsData} loading={loadingPok} setSelectPok={setSelectPok} />
        </div>
        <div className="homeGrid__pokemon">
          <PicPokemon defaultPok={pokemonsData[0]} pokemonPick={selectPok} loading={loadingPok} />
        </div>
        <div className="homeGrid__group">
          <Button
            to={`/${page - 1}`}
            event={() => setPage(page - 1)}
            text="prev"
            styleButton="border-line"
            disabled={!hasPrevius}
          />
          <Button
            to={`/${page + 1}`}
            event={() => setPage(page + 1)}
            text="next"
            styleButton="border-line"
            disabled={!hasNext}
          />
        </div>
      </div>
    </>
  );
}
