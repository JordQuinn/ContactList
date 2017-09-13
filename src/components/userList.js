import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/userActions'
import {selectUser} from '../actions/selectUser'
import data from '../reducers/data'
import userReducer from './reducers/userreducer'



class UserList extends Component{

  componentWillMount() {
    getUsers()
  }

handleClick (e) {
  selectUser(user)
}

  render(){
    console.log(this.props)
    return(
      <div className = "container">
        <ul>
          {this.props.users.map(user => {
            return(
              <li key ={user.id} onClick = {handleClick}>
                <img src={user.picture.thumbnail} alt = 'peeps'/>
               {user.name.first} {user.name.last}</li>
              );
            })}
          </ul>
        </div>
        );
      }
    }

function mapStateToProps(state){
  return {
    users: state.users.users
  }
}

function matchDispatchToProps(dispatch){
  return connect({selectUser: selectUser}, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps)(UserList);
