import React, { useState } from 'react';

const Context = React.createContext({});

export function PokemonContextProvider({ children }) {
  const [PokemonsCTX, setPokemonsCTX] = useState();

  return <Context.Provider value={{ PokemonsCTX, setPokemonsCTX }}>{children}</Context.Provider>;
}

export default Context;
