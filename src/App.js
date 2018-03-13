import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Route } from 'react-router-dom';

import Crad3AppBar from './layout/Crad3AppBar';
import Crad3Drawer from './layout/Crad3Drawer';
import Welcome from './welcome';
import PrototypeOne from './prototype_one';
import PrototypeTwo from './prototype_two';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <Crad3AppBar />
    <Crad3Drawer />

    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/prototype_one" component={PrototypeOne} />
      <Route exact path="/prototype_two" component={PrototypeTwo} />
    </main>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
