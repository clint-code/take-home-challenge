import React, { Component } from 'react';

import './App.css';

import { Button, Box, Autocomplete, TextField, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import GetBooks from './GetBooks';

import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  HttpLink,
  from} 
  from '@apollo/client';

import{onError} from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
      graphqlErrors.map(({message, location, path}) => {
        alert(`Graphql error ${message}`);
      });
  }
});

// const link = from({
//   errorLink,
//   new HttpLink({uri: "http://localhost:4000/"}),
// });

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
  errorLink
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const App = () => {
  

  return (

    <ApolloProvider client={client}>
        <GetBooks />
    </ApolloProvider>

  );

}

export default App;
