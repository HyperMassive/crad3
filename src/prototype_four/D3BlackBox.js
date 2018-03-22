import React from 'react';
import { connect } from 'react-redux';
import { graphManager } from './graphManager';

class D3BlackBox extends React.Component {
  componentDidMount = () => {
    const { nodes, links } = this.props;
    this.graph = new graphManager(this.svg);
    this.graph.updateGraph(nodes, links);
  };
  shouldComponentUpdate = (nextProps, previousProps) => {
    this.graph.updateGraph(nextProps.nodes, nextProps.links);
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
  nodes: state.prototype4.nodes,
  links: state.prototype4.links,
});

export default connect(mapStateToProps)(D3BlackBox);
