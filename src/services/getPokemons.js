const fromApiResponseToPokemons = apiResponse => {
  const { results = [], next, previous } = apiResponse;
  if (Array.isArray(results)) {
    const pokemons = results.map(pokemon => {
      const { name, url } = pokemon;
      return { name, url };
    });
    console.log(!!next);
    console.log(!!previous);
    return [pokemons, !!next, !!previous];
  }
  return [];
};

export default async function getPokemons({ limit = 5, page = 0 } = {}) {
  const apiURL = `${process.env.REACT_APP_API_URL}/pokemon?limit=${limit}&offset=${page * limit}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToPokemons);
}
