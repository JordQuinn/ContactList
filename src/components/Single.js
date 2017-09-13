import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import data from './reducers/data'


class Single extends Component {

static defaultProps = {
    name:{
      first:'',
      last: ''
    },
    locale:{
      city:'',
      state:''
    },
    picture:{
      large:'',
      medium:'',
      thumbnail:''
    },
    email:''
}

  componentDidMount(){
    single(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    return(
      <div className="wrapper">
        <div className="photo">
          <div className="button">
            <NavLink activeClassName="active" to="/App">
              <i className="fa fa-arrow-left" aria-hidden="true"/>
            </NavLink>
          </div>
          <img src={this.props.picture.large} />
        </div>
        <div className="fname">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
          <div className="first">
            {this.props.name.first}
          </div>
          <div className="last">
            {this.props.name.last}
          </div>
        </div>
        <div className="email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          {this.props.email}
        </div>
        <div className="mobile">
        <i className="fa fa-mobile" aria-hidden="true"></i>
          {this.props.cell}
        </div>
        <div className="location">
        <i className="fa fa-globe" aria-hidden="true"></i>
          <div className="city">
          {this.props.locale.city},
        </div>
        <div className="state">
          {this.props.locale.state}
        </div>
        </div>
      </div>
    )
  }
}

function stateToProps(appState, ownprops){
  return {...appState.person, ...ownprops}
}

export default connect(stateToProps)(Single)
