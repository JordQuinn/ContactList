import {combineReducers} from 'redux'

const initialState = {
  users: []
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIST_USERS':
      return {...state, users: action.users}
    default:
      return state
  }
}

const allReducers = combineReducers({
  users: userReducer
});

export default allReducers;
