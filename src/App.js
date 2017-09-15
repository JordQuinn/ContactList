import React, { Component } from 'react';
import './index.css';
import UserList from './components/userList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='appdiv'>
          <h2>My Peeps: </h2>
        </div>
          <UserList />
      </div>
    );
  }
}

export default App;
