import './App.css';
import  Navbar  from "./components/navbar/Navbar";
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import PokeDex from "./components/pages/pokedex/PokeDex";
import MyPokemons from "./components/pages/my-pokemons/MyPokemons";
import PokemonDetail from "./components/pages/pokemon-detail/PokemonDetail";
import ErrorPage from "./components/pages/error-page/ErrorPage";



const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router basename='/'>
      <Navbar />
        <div className="container page">
          <Switch >
            <Route exact path='/'>
              <Redirect to="/pokedex" component={PokeDex}/>
            </Route>
            <Route exact path='/pokedex' component={PokeDex} />
            <Route exact path='/mypokemons' component={MyPokemons}/>
            <Route exact path='/pokemon/:name' component={PokemonDetail}/>
            <Route exact path='/pokemon/:name/:nickname' component={PokemonDetail}/>
            <Route exact path='*' component={ErrorPage} />
          </Switch>
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
