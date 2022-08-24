import './App.css' 
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client' 
import DisplayData from './DisplayData';



const App = () => {

  let client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
       <DisplayData/>
      </div>
    </ApolloProvider>
  )
}

export default App