import {successType} from 'actionware';
import reducer, {login} from './identity';

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
  });
});
