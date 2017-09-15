import {combineReducers} from 'redux'


const initialState = {
  users: [],
  currentUser:{}
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIST_USERS':
      return {...state, users: action.users}
    case 'USER_SELECTED':
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}

const allReducers = combineReducers({
  users: userReducer
});

export default allReducers;
