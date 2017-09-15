import store from '../store'
import data from '../reducers/data'


export function getUsers() {
  store.dispatch({
    type: 'LIST_USERS',
    users:data
  })
}

export const selectUser = (id) => {
  const state = store.getState()
  const user = state.users.users.find(user => user.id == id)
  store.dispatch({
    type:'USER_SELECTED',
    payload: user
  })
};
