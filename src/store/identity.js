import {createReducer} from 'actionware';

const initialState = {
  user: {
    firstName: 'Justin',
    lastName: 'Obney',
    username: 'justinobney',
  },
};

export const login = async () => await api.get('url/login');
export const logout = async () => await api.get('url/logout');

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
          id: 1,
          firstName: 'Justin',
          lastName: 'Obney',
          username: 'justinobney',
        });
      }, 1000);
    });
  },
};

export default reducer;
