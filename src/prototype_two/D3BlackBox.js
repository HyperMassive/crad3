import React from 'react';
import { cloneDeep } from 'lodash';
import { setupGraph } from './forceDirectedGraphP2';

class D3BlackBox extends React.Component {
  componentDidMount = () => {
    const { nodes, links } = this.props;
    // clone the data received via props because WILL mutate it via its force simulation.
    // props mutation is a very big NO NO in react. this is to prevent unintended side-effects.
    setupGraph(this.svg, cloneDeep(nodes), cloneDeep(links));
  };
  shouldComponentUpdate = (nextProps, previousProps) => {
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
export default D3BlackBox;
