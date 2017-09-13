import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import App from '../src/App'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store= {store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));registerServiceWorker();
