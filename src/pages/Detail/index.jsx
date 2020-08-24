import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'wouter';
import PokContext from 'context/PokemonContex';
import getPokemon from 'services/getPokemon';
import CardInfo from 'components/CardInfo';
import InfoTag from 'components/InfoTag';
import ListOfTags from 'components/ListOfTags';
import PokeChart from 'components/PokeChart';
import ViewPokemon from 'components/ViewPokemon';
import './Detail.css';

export default function Detail({ params }) {
  const { PokemonsCTX, setPokemonsCTX } = useContext(PokContext);
  const [loadingPok, setLoadingPok] = useState(true);
  const [isError, setIsError] = useState(false);
  const InfoCard = [
    ['height', 'm'],
    ['weight', 'kg'],
  ];
  useEffect(() => {
    //note: create custom hook
    if (!PokemonsCTX) {
      console.log('entre en if');
      getPokemon(params.name)
        .then(pokemon => {
          !pokemon.length && setIsError(true);
          console.log('error:' + isError);
          setPokemonsCTX(pokemon);
          setLoadingPok(false);
        })
        .catch(err => {
          console.log('es un error');
          setLoadingPok(false);
          setIsError(true);
        });
    } else {
      console.log('seteo');
      setLoadingPok(false);
    }
  }, [params, PokemonsCTX, setPokemonsCTX, setLoadingPok]);

  console.log(`load:${loadingPok} error:${isError}`);
  if (!loadingPok && isError) return <Redirect to="/page/notFound" />;
  return (
    <>
      {loadingPok ? (
        'cargando menor'
      ) : (
        <>
          <div className="DetailPage">
            <div className="DetailPage__features">
              {InfoCard.map(info => (
                <CardInfo
                  key={info[0]}
                  infoTitle={info[0]}
                  infoValue={PokemonsCTX[`${info[0]}`] / 10}
                  infoUnit={info[1]}
                />
              ))}
            </div>
            <div className="DetailPage__image">
              <ViewPokemon images={PokemonsCTX} />
            </div>
            <div className="DetailPage__types">
              {PokemonsCTX.types.map(typePok => (
                <InfoTag key={typePok.type.name} type={typePok.type.name} />
              ))}
            </div>
            <div className="DetailPage__title">
              <div>
                <p>
                  <span>No.{PokemonsCTX.id.toString().padStart(3, '0')}</span> / <span>{PokemonsCTX.name}</span>
                </p>
              </div>
            </div>
            <div className="DetailPage__chart">
              <PokeChart stats={PokemonsCTX.stats} />
            </div>
            <div className="DetailPage__abilities">
              <ListOfTags header="abilities" items={PokemonsCTX.abilities} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
