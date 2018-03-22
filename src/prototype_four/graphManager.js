import * as d3 from 'd3';
import { cloneDeep } from 'lodash';

const color = d3.scaleOrdinal(d3.schemeCategory20);

export class graphManager {
  nodes = [];
  links = [];
  width = 500;
  height = 500;
  simulation = d3.forceSimulation();
  linkSelection;
  nodeSelection;

  constructor(rootSVGElement) {
    const svg = d3.select(rootSVGElement);
    this.updateDimensions(svg);

    this.simulation
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .on('tick', this.ticked);

    this.linkSelection = svg
      .append('g')
      .attr('class', 'links_group')
      .selectAll('line');

    this.nodeSelection = svg
      .append('g')
      .attr('class', 'nodes_group')
      .selectAll('circle');
  }

  ticked = () => {
    this.linkSelection
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    this.nodeSelection.attr('cx', d => d.x).attr('cy', d => d.y);
  };

  updateGraph = (nodes, links) => {
    // clone the data received via props because WILL mutate it via its force simulation.
    // props mutation is a very big NO NO in react. this is to prevent unintended side-effects.
    if (nodes) this.nodes = cloneDeep(nodes);
    if (links) this.links = cloneDeep(links);
    this.restart();
  };

  restart = () => {
    // Apply the general update pattern to the nodes.
    this.nodeSelection = this.nodeSelection.data(this.nodes, d => d.id);
    this.nodeSelection.exit().remove();
    this.nodeSelection = this.nodeSelection
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', d => color(d.group))
      .call(
        d3
          .drag()
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended)
      )
      .merge(this.nodeSelection);

    // Apply the general update pattern to the links.
    this.linkSelection = this.linkSelection.data(
      this.links,
      d => `${d.source.id}-${d.target.id}`
    );
    this.linkSelection.exit().remove();
    this.linkSelection = this.linkSelection
      .enter()
      .append('line')
      .attr('stroke', 'grey')
      .attr('stroke-width', d => Math.sqrt(d.value))
      .merge(this.linkSelection);

    // Update and restart the simulation.
    this.simulation.nodes(this.nodes);
    this.simulation.force('link').links(this.links);
    this.simulation.alpha(1).restart();
  };

  dragstarted = d => {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  };

  dragged = d => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  dragended = d => {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  };

  updateDimensions = svg => {
    const domRect = svg.node().getBoundingClientRect();
    this.width = domRect.width;
    this.height = domRect.height;
  };
}
