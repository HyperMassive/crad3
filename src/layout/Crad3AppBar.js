import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  },
});

const Crad3AppBar = ({ classes }) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        CRAD3
      </Typography>
      <Button href="https://github.com/HyperMassive/crad3/" color="inherit">
        Github
      </Button>
    </Toolbar>
  </AppBar>
);

Crad3AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Crad3AppBar);
