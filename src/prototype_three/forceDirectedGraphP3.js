import * as d3 from 'd3';

export const setupGraph = (rootSVGElement, nodesInput, linksInput) => {
  const width = 500;
  const height = 500;
  const svg = d3
    .select(rootSVGElement)
    .attr('width', width)
    .attr('height', height);
  const color = d3.scaleOrdinal(d3.schemeCategory20);

  let nodes = nodesInput;
  let links = linksInput;

  const simulation = d3
    .forceSimulation()
    .force('link', d3.forceLink().id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))
    .on('tick', ticked);

  let link = svg
    .append('g')
    .attr('class', 'links_group')
    .selectAll('line');

  let node = svg
    .append('g')
    .attr('class', 'nodes_group')
    .selectAll('circle');

  restart();

  function restart(newNodeSet, newLinkSet) {
    if (newNodeSet) nodes = newNodeSet;
    if (newLinkSet) links = newLinkSet;
    // Apply the general update pattern to the nodes.
    node = node.data(nodes, d => d.id);
    node.exit().remove();
    node = node
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', d => color(d.group))
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      )
      .merge(node);

    // Apply the general update pattern to the links.
    link = link.data(links, d => d.source.id + '-' + d.target.id);
    link.exit().remove();
    link = link
      .enter()
      .append('line')
      .attr('stroke', 'grey')
      .attr('stroke-width', d => Math.sqrt(d.value))
      .merge(link);

    // Update and restart the simulation.
    simulation.nodes(nodes);
    simulation.force('link').links(links);
    simulation.alpha(1).restart();
  }

  function ticked() {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('cx', d => d.x).attr('cy', d => d.y);
  }

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return {
    restart,
  };
};
