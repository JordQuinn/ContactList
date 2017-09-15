import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import App from '../src/App'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Single from './components/Single'
import {getUsers} from './actions/userActions'
import '../node_modules/font-awesome/css/font-awesome.css'

class Application extends React.Component {
  componentWillMount() {
    getUsers()
  }
  render() {
    return (
      <MuiThemeProvider>
        <Provider store= {store}>
          <div>
            <Router>
                <Switch>
                  <Route exact path='/'component= {App} />
                  <Route path='/Single/:id'component= {Single} />
                </Switch>
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}


ReactDOM.render(
  <Application />
  , document.getElementById('root'));registerServiceWorker();
