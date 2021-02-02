import './App.css';
import  Navbar  from "./components/navbar/Navbar";
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import MyPokemonList from "./components/pages/my-pokemon-list/MyPokemonList";
import PokemonList from "./components/pages/pokemon-list/PokemonList";
import PokemonDetail from "./components/pages/pokemon-detail/PokemonDetail";



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
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Redirect to="/pokemon-list" />
        </Route>
        <Route path='/pokemon-list' component={PokemonList}/>
        <Route path='/my-pokemon-list' component={MyPokemonList}/>
        <Route path='/pokemon-detail' component={PokemonDetail}/>
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
