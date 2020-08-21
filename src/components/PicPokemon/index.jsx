import React, { useContext } from 'react';
import { Link } from 'wouter';
import pokContext from 'context/PokemonContex';
import './PicPokemon.css';
export default function PicPokemon({ defaultPok, pokemonPick, loading }) {
  const { PokemonsCTX } = useContext(pokContext);
  const selectedPok = PokemonsCTX || defaultPok;
  const imagePok = selectedPok && selectedPok.sprites;
  const ShowImagePok =
    imagePok &&
    (imagePok.other['official-artwork'].front_default ||
      imagePok.other.dream_world.front_default ||
      imagePok.front_default);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="PokemonPic">
          <Link to={`detail/${selectedPok.name}`}>features</Link>
          <div className="pokemonPic_image-content">
            <img src={ShowImagePok} alt="picpokemon" className="PokemonPic__img" />
          </div>
          <div className="cardinfo">
            <div className="cardinfo__up">No.{selectedPok.id.toString().padStart(3, '0')}</div>
            <div className="cardinfo__down">{selectedPok.name}</div>
          </div>
        </div>
      )}
    </>
  );
}
