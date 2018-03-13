import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const Crad3AppBar = ({ classes }) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        CRAD3
      </Typography>
    </Toolbar>
  </AppBar>
);

Crad3AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Crad3AppBar);
