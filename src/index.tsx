import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './utils/theme';

import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './store/store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
      <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
              <Router>
                  <App />
              </Router>
          </ThemeProvider>
      </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
