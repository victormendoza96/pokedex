const fromApiResponseToPokemons = apiResponse => {
  const { abilities, height, weight, name, stats, sprites, id } = apiResponse;
  const statsPok = stats.map(statPok => {
    const obj = { name: statPok.stat.name, value: statPok.base_stat };
    return obj;
  });

  return { abilities, height, weight, name, statsPok, sprites, id };
};

export default function getPokemon(name = 'pikachu') {
  const apiURL = `${process.env.REACT_APP_API_URL}/pokemon/${name}`;

  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then(res => res.json())
      .then(pokemon => resolve(pokemon));
  });
}
