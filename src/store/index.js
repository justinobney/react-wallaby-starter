import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {setup, actionwareReducer} from 'actionware';

import identity from './identity';

const rootReducer = {
  identity,
  actionwareReducer,
  router: routerReducer,
};

export default function finalCreateStore(history) {
  const historyMiddleware = routerMiddleware(history);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(applyMiddleware(historyMiddleware, thunk))
  );

  setup({store});

  return store;
}
