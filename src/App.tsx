import React from 'react';
// import clsx from 'clsx';
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
            display: 'flex',
            backgroundColor: '#DDD5D0'
        },
    }),
);

function App() {
    const classes = useStyles();
    let location = useLocation();

    return (
    <div className="App">
      <Navigation showSearch={location.pathname === '/users'} />
      <Container maxWidth={false} className={classes.container}>
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
    </div>
    );
}

export default App;
