import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './page/HomePage';
import VideosPage from './page/VideosPage';

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <CssBaseline />
        <AppBar position='relative' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              <Button href='/'>Unspoiler</Button>
            </Typography>
            <span>Showing Game 1s only!</span>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:channelId/:query' component={VideosPage} />
        </Switch>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
}));

export default App;
