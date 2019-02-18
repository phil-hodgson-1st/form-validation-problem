import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import AccountView from './app/account/account-view';
import configureStore from './store';
import Constants from './app/common/utils/constants';

ReactGA.initialize(Constants.GA_TRACKING_CODE);

const store = configureStore({});

ReactDOM.render(
  <Provider {...{ store }}>
    <AccountView />
  </Provider>,
  document.getElementById('root')
);
