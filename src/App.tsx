import React from 'react';
import clsx from 'clsx';

import './scss/App.scss';
import Navigation from './components/Navigation'
import { Switch, Route, useLocation } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flexGrow: 1,
            transition: 'background-color .2s ease-in-out',
        },
        home: {
            backgroundColor: '#B8B8AA',
        },
        users: {
            backgroundColor: '#CFC0BD',
        },
        posts: {
            backgroundColor: '#DDD5D0',
        },
    }),
);

function App() {
    const location = useLocation();
    const classes = useStyles();
  return (
    <div className="App">
      <Navigation />
      {/*<main>*/}
      <Container maxWidth={false} className={clsx(classes.container, {
          [classes.users]: location.pathname === '/users',
          [classes.home]: location.pathname === '/'
      })}>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Container>
      {/*</main>*/}
    </div>
  );
}

export default App;
