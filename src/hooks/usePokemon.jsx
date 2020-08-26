import { useContext, useEffect, useState } from 'react';
import PokContext from 'context/PokemonContex';
import getPokemon from 'services/getPokemon';

export default function usePokemon({ name }) {
  const { PokemonsCTX, setPokemonsCTX } = useContext(PokContext);
  const [loadingPok, setLoadingPok] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoadingPok(true);
    setIsError(false);

    if (!PokemonsCTX) {
      async function loadingPokemon() {
        try {
          let pokemon = await getPokemon(name);
          setPokemonsCTX(pokemon);
          setLoadingPok(false);
        } catch (e) {
          setIsError(true);
          setLoadingPok(false);
        }
      }
      loadingPokemon();
    } else {
      setLoadingPok(false);
    }
  }, [PokemonsCTX, setPokemonsCTX, setLoadingPok, name]);

  return { isError, loadingPok, PokemonsCTX };
}
