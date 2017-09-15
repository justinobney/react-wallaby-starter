import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import identity from './identity';

const rootReducer = {
  identity,
};

export const actions = exportReducerProp('actionCreators');
export const selectors = exportReducerProp('selectors');

function exportReducerProp(propName) {
  return Object.keys(rootReducer).reduce((result, key) => {
    result[key] = rootReducer[key][propName];
    return result;
  }, {});
}

export default function finalCreateStore(history) {
  const historyMiddleware = routerMiddleware(history);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer,
    }),
    composeEnhancers(applyMiddleware(historyMiddleware, thunk))
  );
}
