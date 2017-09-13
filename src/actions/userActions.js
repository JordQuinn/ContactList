import store from '../store'
import data from '../reducers/data'


export function getUsers() {
  store.dispatch({
    type: 'LIST_USERS',
    users:data
  })
}
