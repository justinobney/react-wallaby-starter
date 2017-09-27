import {createReducer} from 'actionware';

const initialState = {
  user: null,
};

export async function login() {
  const data = await api.get('url/foo');
  return data;
}

export function logout() {
  api.get('url/logout');
}

const reducer = createReducer(initialState)
  .on(login, (state, user) => ({
    ...state,
    user,
  }))
  .on(logout, state => ({
    ...state,
    user: null,
  }));

const api = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          firstName: 'Justin',
          lastName: 'Obney',
          username: 'justinobney',
        });

        // reject({message: 'foo error'});
      }, 1000);
    });
  },
};

export default reducer;
