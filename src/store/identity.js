import {createReducer} from 'actionware';

const initialState = {
  user: null,
};

export function login() {
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
}

// export const selectors = {};

const reducer = createReducer(initialState).on(login, (state, user) => {
  return {
    ...state,
    user,
  };
});

export default reducer;
