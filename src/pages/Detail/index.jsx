import React from 'react';
import usePokemon from 'hooks/usePokemon';
import CardInfo from 'components/CardInfo';
import InfoTag from 'components/InfoTag';
import ListOfTags from 'components/ListOfTags';
import PokeChart from 'components/PokeChart';
import ViewPokemon from 'components/ViewPokemon';
import './Detail.css';

export default function Detail({ params }) {
  const { PokemonsCTX, isError, loadingPok } = usePokemon({ name: params.name });
  const InfoCard = [
    ['height', 'm'],
    ['weight', 'kg'],
  ];
  if (!loadingPok && isError) return 'error';
  return (
    <>
      {loadingPok ? (
        <div className="full-center">
          <img src="/pikachu-loading.gif" alt="loading" className="principal-img" />
        </div>
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
                  <span>No.{PokemonsCTX.id.toString().padStart(3, '0')}</span> /{' '}
                  <span className="capitalize">{PokemonsCTX.name}</span>
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
