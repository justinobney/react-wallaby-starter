import {handleActions} from 'redux-actions';
import {thunkCreator} from './util';

const initialState = {
  user: null,
  loading: false,
};

// const selectors = {};

const actionCreators = {
  login: thunkCreator({
    async promise() {
      return new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve({
              firstName: 'Justin',
              lastName: 'Obney',
              username: 'justinobney',
            }),
          1000
        );
      });
    },
    type: 'LOGIN',
  }),
};

const handlers = {
  [actionCreators.login.requested]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [actionCreators.login.resolved]: (state, action) => ({
    ...state,
    user: {
      ...action.payload,
    },
    loading: false,
  }),
  [actionCreators.login.rejected]: (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }),
};

const reducer = handleActions(handlers, initialState);
reducer.actionCreators = actionCreators;

export default reducer;
