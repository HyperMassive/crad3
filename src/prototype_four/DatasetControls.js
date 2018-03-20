import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'material-ui';

import {
  loadTriangleGraph,
  loadMisGraph,
  injectNode,
} from '../redux/modules/prototype4';

const DatasetControls = ({
  loadTriangleGraph,
  loadLesMisGraph,
  injectSingleNode,
}) => (
  <div>
    <Button variant="raised" color="primary" onClick={loadTriangleGraph}>
      Load triangle graph
    </Button>
    <br />
    <br />
    <Button variant="raised" color="primary" onClick={loadLesMisGraph}>
      Load les mis graph
    </Button>
    <br />
    <br />
    <Button variant="raised" color="primary" onClick={injectSingleNode}>
      inject single node
    </Button>
  </div>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  loadTriangleGraph: () => {
    dispatch(loadTriangleGraph());
  },
  loadLesMisGraph: () => {
    dispatch(loadMisGraph());
  },
  injectSingleNode: () => {
    dispatch(injectNode({ id: 'epsilon', label: 'Epsilon', group: 8 }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetControls);
