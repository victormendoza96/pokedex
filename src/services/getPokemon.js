const fromApiResponseToPokemons = apiResponse => {
  const h = ({ abilities, height, name } = apiResponse);
  const pokemon = { abilities, height, name };
  debugger;
  return { name, height };

  // const pokemons = results.map(pokemon => {
  // });
  // return pokemons;
};

export default function getPokemon(name = 'pikachu') {
  const apiURL = `${process.env.REACT_APP_API_URL}/pokemon/${name}`;

  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then(res => res.json())
      .then(pokemon => resolve(fromApiResponseToPokemons(pokemon)));
  });
}
