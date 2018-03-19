import * as d3 from 'd3';

export const setupGraph = (rootSVGElement, nodesArray, linksArray) => {
  const width = 500;
  const height = 500;
  const svg = d3
    .select(rootSVGElement)
    .attr('width', width)
    .attr('height', height);

  const color = d3.scaleOrdinal(d3.schemeCategory20);

  const simulation = d3
    .forceSimulation()
    .force('link', d3.forceLink().id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg
    .append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(linksArray)
    .enter()
    .append('line')
    .attr('stroke', 'grey')
    .attr('stroke-width', d => Math.sqrt(d.value));

  var node = svg
    .append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(nodesArray)
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
    );

  node.append('title').text(d => d.id);

  simulation.nodes(nodesArray).on('tick', ticked);

  simulation.force('link').links(linksArray);

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
};
