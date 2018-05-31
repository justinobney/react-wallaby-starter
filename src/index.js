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
const rootEl = document.getElementById('root');

analytics.page(window.location.pathname);
history.listen((location, action) => {
  analytics.page(location.pathname);
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      rootEl
    );
  });
}
