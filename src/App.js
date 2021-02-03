import './App.css';
import  Navbar  from "./components/navbar/Navbar";
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Route exact path='/' component={PokemonList} />
            <Route path='/my-pokemon' component={MyPokemonList}/>
            <Route path='/pokemon-detail/:name' component={PokemonDetail}/>
            <Route exact path='*' component={ErrorPage} />
          </Switch>
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
