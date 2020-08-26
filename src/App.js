import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import Detail from 'pages/Detail';
import ErrorPage from 'pages/ErrorPage';
import HomePage from 'pages/Home';
import InitPage from 'pages/InitPage';
import { PokemonContextProvider } from 'context/PokemonContex';
import NavBar from 'components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <div className="page">
        <PokemonContextProvider>
          <Switch>
            <Route path="/" component={InitPage} />
            <Route path="/:page" component={HomePage} />
            <Route path="/detail/:name" component={Detail} />
            <Route path="/:rest*" component={ErrorPage} />
          </Switch>
        </PokemonContextProvider>
      </div>
    </>
  );
}

export default App;
