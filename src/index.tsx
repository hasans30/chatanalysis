import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { orgPattern } from './components/navbar2/SidebarData';


export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

const org = process.env.REACT_APP_ORG;
const year = process.env.REACT_APP_YEAR;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <BrowserRouter >
        <Redirect exact from='/' to={`${org}/${year}`} strict />
        <Switch>
          <Route path={orgPattern}>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
