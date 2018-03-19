import React from 'react';
import { Typography, Paper, withStyles } from 'material-ui';

import D3BlackBox from './D3BlackBox';
import { miserables } from './miserablesData';

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
        <Typography variant="body1">spiel</Typography>
        <Paper elevation={1} classes={{ root: classes.graphPaper }}>
          <D3BlackBox nodes={miserables.nodes} links={miserables.links} />
        </Paper>
      </div>
    );
  };
}

export default withStyles(styles)(PrototypeThree);
