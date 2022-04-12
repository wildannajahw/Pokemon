import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
// import App from './App';
// import { offsetLimitPagination } from '@apollo/client/utilities';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
// import App from './App';
import App from './App';
import offsetLimitPagination from './utils/offsetLimitPagination';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: offsetLimitPagination(),
        },
      },
    },
  }),
});
// const client = new ApolloClient({
//   uri: "https://graphql-pokeapi.graphcdn.app/",
//   cache: new InMemoryCache(),
// });
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
