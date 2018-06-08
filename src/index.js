import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import createStore from './store/index';
import analytics from './features/analytics/index';

import 'styles';
import App from './App';

const history = createHistory();
const store = createStore(history);
analytics.trackHistory(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
