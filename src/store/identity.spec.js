import {successType} from 'actionware';
import reducer, {login, logout} from './identity';

describe('Store: identity', () => {
  describe('reducer', () => {
    it(successType(login), () => {
      const initialState = {};
      const expectedState = {
        user: {
          name: 'justin',
        },
      };
      const nextState = reducer(initialState, {
        type: successType(login),
        payload: {
          name: 'justin',
        },
      });
      expect(expectedState).toEqual(nextState);
    });

    it(successType(logout), () => {
      const initialState = {
        user: {
          name: 'justin',
        },
      };
      const expectedState = {
        user: null,
      };
      const nextState = reducer(initialState, {
        type: successType(logout),
      });
      expect(expectedState).toEqual(nextState);
    });
  });
});
