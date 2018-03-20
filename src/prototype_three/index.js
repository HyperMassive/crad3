import React from 'react';
import { Typography, Paper, withStyles } from 'material-ui';

import D3BlackBox from './D3BlackBox';
import DatasetActions from './DatasetActions';

const styles = theme => ({
  graphPaper: {
    marginTop: 10,
    padding: 10,
  },
});

class PrototypeThree extends React.Component {
  state = {
    selectedDataset: 'miserables',
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display3">Prototype Three</Typography>
        <Typography variant="subheading">D3 Black box 2</Typography>
        <Typography variant="body1">
          Adding redux in order to resemble a typical react/ redux app. Also
          added a over simplified method to deliver new data to d3, however it
          does not play nice with d3's data-merges, hence the loss of state.
          <br />
          <br />
          D3's update pattern typically relies on 3 data sets:
          <ul>
            <li>
              Update set - datums with externally modified attributes. eg: node
              labels.
            </li>
            <li>Enter set - New datums. eg: a newly created node.</li>
            <li>Exit set - Datums marked for disposal. eg: a deleted node.</li>
          </ul>
        </Typography>
        <Paper elevation={1} classes={{ root: classes.graphPaper }}>
          <D3BlackBox />
          <DatasetActions />
        </Paper>
      </div>
    );
  };
}

export default withStyles(styles)(PrototypeThree);
