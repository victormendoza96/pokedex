import React, { useContext } from 'react';
import { Link } from 'wouter';
import pokContext from 'context/PokemonContex';
import ViewPokemon from 'components/ViewPokemon';
import Button from 'components/Button';
import './PicPokemon.css';
export default function PicPokemon({ defaultPok, loading }) {
  const { PokemonsCTX } = useContext(pokContext);
  const selectedPok = PokemonsCTX || defaultPok;

  return (
    <>
      {loading ? (
        <img src="/pikachu-loading.gif" alt="loading" className="principal-img" />
      ) : (
        <div className="PokemonPic">
          <div className="cardinfo">
            <div className="cardinfo__up">No.{selectedPok.id.toString().padStart(3, '0')}</div>
            <div className="cardinfo__down">{selectedPok.name}</div>
          </div>
          <Link to={`detail/${selectedPok.name}`}>
            <span className="pointer">
              <ViewPokemon images={selectedPok} />
            </span>
          </Link>
          <Button to={`detail/${selectedPok.name}`} text="features" styleButton="border-line" />
        </div>
      )}
    </>
  );
}
