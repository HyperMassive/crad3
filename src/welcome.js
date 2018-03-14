import React from 'react';
import { Typography } from 'material-ui';

const Welcome = () => (
  <div>
    <Typography variant="display3">Home</Typography>
    <Typography variant="subheading">reconciling react and d3</Typography>
    <Typography variant="body1">
      React and D3 are two frontend javascript libs which both rely on
      monitoring and update the browser DOM, which means they cant be used
      easily together.
      <br />
      <br />
      todo: flesh out and explain other differences.
    </Typography>
  </div>
);

export default Welcome;
