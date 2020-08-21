import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import HomePage from 'pages/Home';
import Detail from 'pages/Detail';
import ErrorPage from 'pages/ErrorPage';
import { PokemonContextProvider } from 'context/PokemonContex';
function App() {
  return (
    <div className="page">
      <PokemonContextProvider>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/:page" component={HomePage} />
          <Route path="/detail/:name" component={Detail} />
          <Route path="/:rest*" component={ErrorPage} />
        </Switch>
      </PokemonContextProvider>
    </div>
  );
}

export default App;
