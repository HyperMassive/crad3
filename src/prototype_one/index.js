import React from 'react';
import { withFauxDOM } from 'react-faux-dom';
import { withStyles, Typography, Paper } from 'material-ui';

import { setupGraph } from './forceDirectedGraph';

const styles = theme => ({
  graphPaper: {
    marginTop: 10,
    padding: 10,
  },
});

class PrototypeOne extends React.Component {
  componentDidMount() {
    const SVGElement = this.props.connectFauxDOM('svg', 'chart');
    setupGraph(SVGElement);
    this.props.animateFauxDOM(10000);
  }

  render() {
    const { chart, classes } = this.props;
    return (
      <div>
        <Typography variant="display3">Prototype One</Typography>
        <Typography variant="subheading">react-faux-dom</Typography>
        <Typography variant="body1">
          The library react-faux-dom essentially emulates a simplified DOM-like
          stucture for d3.js to diff and manipulate, then renders the DOM data
          structure into react elements.
          <br />
          <br />
          It seems react-faux-dom's animation implementation relies on setting a
          'time-to-animate' period (set to 10 sec below). Unfortunately this
          prevents any complex user-interaction such as node dragging and
          pinning. The emulated DOM doesnt seem to handle d3 force-simulation
          engine's mutations well.
          <br />
          <br />
          It has the advantage of entirely separate d3.js and react code which
          means both libraries extensive documentation remains useful.
          <br />
          <br />
          This solution is optimal in simpler graph styles (line, bar, pie, etc)
        </Typography>
        <Paper elevation={1} classes={{ root: classes.graphPaper }}>
          {chart}
        </Paper>
      </div>
    );
  }
}

export default withFauxDOM(withStyles(styles)(PrototypeOne));
