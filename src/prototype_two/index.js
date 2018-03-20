import React from 'react';
import { Typography, Paper, withStyles } from 'material-ui';

import D3BlackBox from './D3BlackBox';
import DatasetControl from './DatasetControl';
import cloneTriangleGraph from '../graph_data/triangleData';
import cloneMiserablesGraph from '../graph_data/miserablesData';

const styles = theme => ({
  graphPaper: {
    marginTop: 10,
    padding: 10,
  },
  blackBox: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'dashed',
  },
});

class PrototypeTwo extends React.Component {
  state = {
    selectedDataset: 'miserables',
  };

  render = () => {
    const { classes } = this.props;
    let { selectedDataset } = this.state;

    let dataset = cloneTriangleGraph();
    if (selectedDataset === 'miserables') {
      dataset = cloneMiserablesGraph();
    }

    return (
      <div>
        <Typography variant="display3">Prototype Two</Typography>
        <Typography variant="subheading">D3 Black box v5</Typography>
        <Typography variant="body1">
          Aim: implement a black box or 'DMZ' for d3 to operate within; react
          will ONLY deliver data to the black-box.
          <br />
          <br />
          The black box is highlighted by the red dotted border. It is
          implemented using reacts lifecycle methods; the 'black box'
          component's shouldComponentUpdate is hardcoded to return false.
          <br />
          <br />
          Conclusion: the blackbox approach seems to work well: it maintains
          complex interactions and 'classical' d3 code. However react
          applications typically rely on a centralised state which is the
          rendered in a reactive manner. This current simple black box
          implementation essentially blocks data updates, which is why changing
          the dataset (delivered via react props) does nothing.
        </Typography>
        <Paper elevation={1} classes={{ root: classes.graphPaper }}>
          <DatasetControl
            selectedDataset={selectedDataset}
            onDatasetChange={(e, value) => {
              this.setState({ selectedDataset: value });
            }}
          />
          <div className={classes.blackBox}>
            <D3BlackBox nodes={dataset.nodes} links={dataset.links} />
          </div>
        </Paper>
      </div>
    );
  };
}

export default withStyles(styles)(PrototypeTwo);
