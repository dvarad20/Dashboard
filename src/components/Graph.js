// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Graph = ({ data }) => {
//   const ref = useRef();

//   useEffect(() => {
//     const svg = d3.select(ref.current)
//       .attr('width', 600)
//       .attr('height', 400)
//       .style('background-color', '#f0f0f0');

//     svg.selectAll('*').remove(); // Clear previous renders

//     const simulation = d3.forceSimulation()
//       .force('link', d3.forceLink().id(d => d.id))
//       .force('charge', d3.forceManyBody().strength(-400))
//       .force('center', d3.forceCenter(300, 200));

//     const nodes = [];
//     const links = [];

//     data.categories.forEach(category => {
//       nodes.push({ id: category.name, group: 'category' });
//       category.widgets.forEach(widget => {
//         nodes.push({ id: widget.name, group: 'widget' });
//         links.push({ source: category.name, target: widget.name });
//       });
//     });

//     const link = svg.append('g')
//       .selectAll('line')
//       .data(links)
//       .enter().append('line')
//       .attr('stroke', '#999');

//     const node = svg.append('g')
//       .selectAll('circle')
//       .data(nodes)
//       .enter().append('circle')
//       .attr('r', 8)
//       .attr('fill', d => d.group === 'category' ? '#ff6347' : '#4682b4')
//       .call(d3.drag()
//         .on('start', dragstarted)
//         .on('drag', dragged)
//         .on('end', dragended));

//     const label = svg.append('g')
//       .selectAll('text')
//       .data(nodes)
//       .enter().append('text')
//       .text(d => d.id)
//       .attr('x', 12)
//       .attr('y', 3)
//       .style('font-size', '12px');

//     simulation.nodes(nodes).on('tick', ticked);
//     simulation.force('link').links(links);

//     function ticked() {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node
//         .attr('cx', d => d.x)
//         .attr('cy', d => d.y);

//       label
//         .attr('x', d => d.x)
//         .attr('y', d => d.y);
//     }

//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }

//   }, [data]);

//   return <svg ref={ref}></svg>;
// };

// export default Graph;
