import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { drawerItems } from './DrawerContent';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

const Crad3Drawer = ({ classes }) => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>{drawerItems}</List>
    </Drawer>
  );
};

Crad3Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Crad3Drawer);
