import { useEffect, useState } from 'react';
import getPokemon from 'services/getPokemon';
import getPokemons from 'services/getPokemons';

const INITIAL_PAGE = 0;

export default function usePokemonsData() {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPok, setLoadingpok] = useState(true);
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    setLoadingpok(true);
    async function fetchPokeData() {
      const pokemonsUrl = await getPokemons({ page });
      await loadingPokemons(pokemonsUrl);
      setLoadingpok(false);
    }

    fetchPokeData();
  }, [page]);

  const loadingPokemons = async pokemonsUrl => {
    let _pokemonsData = await Promise.all(
      pokemonsUrl.map(async ({ name }) => {
        let pokemon = await getPokemon(name);
        return pokemon;
      })
    );

    setPokemonsData(_pokemonsData);
  };

  return { pokemonsData, loadingPok, setPage, page };
}