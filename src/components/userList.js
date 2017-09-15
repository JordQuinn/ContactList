import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectUser} from '../actions/userActions'
import {withRouter} from 'react-router-dom'


class UserList extends Component{

handleClick = (id) => {
  selectUser(id)
  this.props.history.push('/Single/'+ id)
 }

  render(){
    console.log(this.props)
    return(
      <div className = "container">
        <ul>
          {this.props.users.map(user => {
            return(

              <li key ={user.id} onClick = {() => this.handleClick(user.id)}>
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

// function matchDispatchToProps(dispatch){
//   return connect({selectUser: selectUser}, dispatch)
// }

export default connect(mapStateToProps)(withRouter(UserList));
