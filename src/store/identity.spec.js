import {successType} from 'actionware';
import reducer, * as actions from './identity';

describe('Store: identity', () => {
  describe('reducer', () => {
    it(successType(actions.login), () => {
      const initialState = {};
      const expectedState = {
        user: {
          name: 'justin',
        },
      };
      const nextState = reducer(initialState, {
        type: successType(actions.login),
        payload: {
          name: 'justin',
        },
      });
      expect(expectedState).toEqual(nextState);
    });

    it(successType(actions.logout), () => {
      const initialState = {
        user: {
          name: 'justin',
        },
      };
      const expectedState = {
        user: null,
      };
      const nextState = reducer(initialState, {
        type: successType(actions.logout),
      });
      expect(expectedState).toEqual(nextState);
    });
  });
});
