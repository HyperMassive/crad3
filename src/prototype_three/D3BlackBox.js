import React from 'react';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';
import { setupGraph } from './forceDirectedGraphP3';

class D3BlackBox extends React.Component {
  componentDidMount = () => {
    const { nodes, links } = this.props;
    // clone the data received via props because WILL mutate it via its force simulation.
    // props mutation is a very big NO NO in react. this is to prevent unintended side-effects.
    this.graph = setupGraph(this.svg, cloneDeep(nodes), cloneDeep(links));
  };
  shouldComponentUpdate = (nextProps, previousProps) => {
    this.graph.restart(nextProps.nodes, nextProps.links);
    return false;
  };
  render = () => (
    <svg
      height={500}
      width={500}
      ref={svg => {
        this.svg = svg;
      }}
    />
  );
}

const mapStateToProps = state => ({
  nodes: state.prototype3.nodes,
  links: state.prototype3.links,
});

export default connect(mapStateToProps)(D3BlackBox);
