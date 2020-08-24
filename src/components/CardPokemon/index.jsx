import React, { useContext } from 'react';
import PokContext from 'context/PokemonContex';
import './CardPokemon.css';

export default function Card({ id, name, image, setSelectPok, pokeinfo }) {
  const imagePok = image.other.dream_world.front_default || image.front_default || false;
  const { setPokemonsCTX } = useContext(PokContext);

  return (
    <div className="PokemonCard" onClick={() => setPokemonsCTX(pokeinfo)}>
      <div className="PokemonCard__header">
        <img src="/pokeball2.jpg" alt="min-ball" className="PokemonCard__icon" />
        <span>No.{id.padStart(3, '0')}</span>
      </div>
      <div className="PokemonCard__body">
        <img alt="pokeball-bg" src="/poke-bg.png" className={!!imagePok ? 'PokemonCard__image-bg' : 'd-none'} />
        <img alt="pokeball" src={!!imagePok ? imagePok : '/error_image.png'} className="PokemonCard__image" />
        <p className="PokemonCard__text">{name}</p>
      </div>
    </div>
  );
}
