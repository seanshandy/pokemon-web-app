import './App.css';
import  Navbar  from "./components/navbar/Navbar";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetPokemonList from "./components/GetPokemonList";


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
    <Router>
      <Navbar />
      <ApolloProvider client={client}>
      <GetPokemonList />
      <Switch>
        <Route path='/' />
      </Switch>
    </ApolloProvider>
    </Router>
  );
}

export default App;
