import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {selectUser} from '../actions/userActions'


class Single extends Component {

static defaultProps = {
    name:{first:'', last: ''},
    locale:{city:'', state:''},
    picture:{large:'', medium:'', thumbnail:''},
    email:''
}

  componentDidMount(){
    selectUser(this.props.match.params.id)
  }

  render() {
    console.log(this.props);
    return(
      <div className="wrapper">
        <div className="photo">
           <div className="arrow">
            <NavLink activeClassName="active" to="/">
              <i className="fa fa-arrow-left" aria-hidden="true"/>
            </NavLink>
           </div>
           <img className = 'singleimg' src={this.props.picture.large} alt='portrait' />
        </div><br></br>
        <div className = 'details'>
        <div className= "name">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
            {this.props.name.first} {this.props.name.last}<br></br>
        </div>
        <div className="email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          {this.props.email}
        </div>
        <div className="mobile">
        <i className="fa fa-mobile" aria-hidden="true"></i>
          &nbsp; {this.props.cell}
        </div>
        <div className="location">
        <i className="fa fa-globe" aria-hidden="true"></i>
        {this.props.location.city}, {this.props.location.state}
        </div>
      </div>
      </div>
    )
  }
}

function stateToProps(appState){
  // console.log('appState', appState)
  return {...appState.users.currentUser}
}

export default connect(stateToProps)(Single)
