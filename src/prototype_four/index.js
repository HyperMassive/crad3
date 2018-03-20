import React from 'react';
import { Typography, Paper, withStyles } from 'material-ui';

import D3BlackBox from './D3BlackBox';
import DatasetControls from './DatasetControls';

const styles = theme => ({
  graphPaper: {
    marginTop: 10,
    padding: 10,
  },
});

const PrototypeFour = ({ classes }) => (
  <div>
    <Typography variant="display3">Prototype Four</Typography>
    <Typography variant="subheading">D3 Black box 3</Typography>
    <Typography variant="body1">
      No feature changes from Prototype3, just changing d3 code from
      function-modules to es6 classes.
    </Typography>
    <Paper elevation={1} classes={{ root: classes.graphPaper }}>
      <D3BlackBox />
      <DatasetControls />
    </Paper>
  </div>
);

export default withStyles(styles)(PrototypeFour);
