import React from 'react';
import { Typography, withStyles } from 'material-ui';

const styles = theme => ({
  strike: {
    textDecoration: 'line-through',
  },
});

const Welcome = ({ classes }) => (
  <div>
    <Typography variant="display3">Home</Typography>
    <Typography variant="subheading">reconciling react and d3</Typography>
    React and D3 are two frontend javascript libs which both rely on monitoring
    and update the browser DOM, which means they cant be used easily together.
    <br />
    <br />
    <span className={classes.strike}>Code quality excuses</span> In order to
    quickly find a good solution, I eschewed some good practices:
    <ul>
      <li>No typing; no flow/ typescript or even proptypes.</li>
      <li>
        D3 simulation management. In most of the examples I dont properly
        dispose of the simulation engines, which causes issues when switching
        between them. press f5 to fix :(
      </li>
      <li>Linting, I stuck with create-react-app's relaxed default profile.</li>
      <li>
        <span className={classes.strike}>Formatting no prettier here.</span> OK
        I could not handle coding without prettier.
      </li>
    </ul>
    <br />
    implementation notes:
    <ul>
      <li>Using create-react-app as a base, hence the super creative name.</li>
      <li>
        Added redux to recreate typical webapp architecture. (although no async/
        side-effect middleware)
      </li>
      <li>redux-logger middleware installed, so F12 away.</li>
    </ul>
  </div>
);

export default withStyles(styles)(Welcome);
