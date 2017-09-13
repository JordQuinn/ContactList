import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/userActions'
import {selectUser} from '../actions/selectUser'



class UserList extends Component{

  componentWillMount() {
    getUsers()
  }

//handleClick (e) = {
//this.props.selectUser(user)
//}

  render(){
    console.log(this.props)
    return(
      <div className = "container">
        <ul>
          {this.props.users.map(user => {
            return(
              <li key ={user.id}
                //I need to do a handler instead of a function here
                //onClick = {this.handleClick}
              onClick = {() => this.props.selectUser(user)}>
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
