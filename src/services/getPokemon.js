export default function getPokemon(name = 'pikachu') {
  const apiURL = `${process.env.REACT_APP_API_URL}/pokemon/${name}`;

  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then(res => res.json())
      .then(pokemon => resolve(pokemon));
  });
}
