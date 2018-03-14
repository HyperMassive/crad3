import React from 'react';
import {
  withStyles,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from 'material-ui';

const styles = theme => ({});

const DatasetControl = ({ selectedDataset, onDatasetChange, classes }) => (
  <div>
    <FormLabel component="legend">Select a dataset:</FormLabel>
    <RadioGroup
      name="dataset"
      value={selectedDataset}
      onChange={onDatasetChange}
    >
      <FormControlLabel
        value="triangle"
        control={<Radio />}
        label="Simple triangle"
      />
      <FormControlLabel
        value="miserables"
        control={<Radio />}
        label="Miserables characters"
      />
    </RadioGroup>
  </div>
);

export default withStyles(styles)(DatasetControl);
