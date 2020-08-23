import React, { useState, useEffect } from 'react';
export default function ViewPokemon({ images, showModal }) {
  const [imageload, setImageLoad] = useState(true);
  const [image, setImage] = useState();

  useEffect(() => {
    setImageLoad(true);
    const imagePok = images.sprites;
    const ShowImagePok =
      imagePok &&
      (imagePok.other['official-artwork'].front_default ||
        imagePok.other.dream_world.front_default ||
        imagePok.front_default);
    setImage(ShowImagePok);
  }, [images]);

  return (
    <div className="pokemonPic_image-content">
      {imageload ? <img src="load.gif" alt="loading" className="PokemonPic__img" /> : null}
      <img
        src={image}
        alt="picpokemon"
        className={imageload ? 'd-none' : 'PokemonPic__img'}
        onLoad={() => setImageLoad(false)}
        onchange={() => setImageLoad(true)}
      />
    </div>
  );
}
