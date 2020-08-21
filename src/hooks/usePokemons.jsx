import { useEffect, useState } from 'react';
import getPokemons from 'services/getPokemons';

const INITIAL_PAGE = 0;

export default function usePokemons() {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPokemons({ page }).then(pokemons => {
      setPokemons(pokemons);
      setLoading(false);
    });
  }, [page, setPokemons]);

  return { loading, pokemons, setPage };
}
