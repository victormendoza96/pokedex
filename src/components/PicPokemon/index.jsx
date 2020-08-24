import React, { useContext } from 'react';
import { Link } from 'wouter';
import pokContext from 'context/PokemonContex';
import ViewPokemon from 'components/ViewPokemon';
import './PicPokemon.css';
export default function PicPokemon({ defaultPok, loading }) {
  const { PokemonsCTX } = useContext(pokContext);
  const selectedPok = PokemonsCTX || defaultPok;

  return (
    <>
      {loading ? (
        <img src="/pikachu-loading.gif" alt="loading" className="PokemonPic__img" />
      ) : (
        <div className="PokemonPic">
          <Link to={`detail/${selectedPok.name}`}>features</Link>
          <ViewPokemon images={selectedPok} />
          <div className="cardinfo">
            <div className="cardinfo__up">No.{selectedPok.id.toString().padStart(3, '0')}</div>
            <div className="cardinfo__down">{selectedPok.name}</div>
          </div>
        </div>
      )}
    </>
  );
}
