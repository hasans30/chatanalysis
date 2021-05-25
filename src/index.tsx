import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import moment from 'moment';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import ErrorPage from './pages/ErrorPage';

async function renderMainApp(): Promise<void> {
  const client = new ApolloClient({
    cache,
    connectToDevTools: true,
  });

  initializeIcons();
  const { org, year } = getStartParams();

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client} >
        <BrowserRouter >
          <Switch>
            <Route path="/report">
              <App org={org!} year={year!} />
            </Route>
            <Route path="/" >
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function getStartParams(): { org: string | undefined; year: string | undefined; } {

  return getLocationParams();

}

function getLocationParams(queryString: string = window.location.search) {
  const parameters = new URLSearchParams(queryString);
  const org = parameters.get('org') || process.env.REACT_APP_ORG;
  const year = parameters.get('year') || process.env.REACT_APP_YEAR || moment().year().toString();

  return { org, year }

}


renderMainApp();