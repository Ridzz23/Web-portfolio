import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Navbar from "../components/Navbar";
import courseworkData from "../data/coursework.json";

const Coursework = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = courseworkData;

    const width = 2000;
    const height = 1200; // smaller so graph is closer to top

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f8f9fb");

    // Clear any previous elements
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(180))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 4)) // start higher
      .force("y", d3.forceY(height / 4).strength(0.05))
      .force("collide", d3.forceCollide().radius(80));

    const link = svg.selectAll(".link")
      .data(data.links)
      .enter().append("line")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2);

    const node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));

    node.append("circle")
      .attr("r", 60)
      .attr("fill", d => d.color || "#f28e2b")
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

    node.append("text")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("fill", "#fff")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .call(wrapText, 110);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    function wrapText(text, width) {
      text.each(function () {
        const textEl = d3.select(this);
        const words = textEl.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1;
        const y = textEl.attr("y");
        const dy = parseFloat(textEl.attr("dy")) || 0;
        let tspan = textEl.text(null).append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", dy + "em");

        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = textEl.append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fb", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ textAlign: "center", padding: "20px 20px 0 20px" }}>
        <h1 style={{ fontSize: "36px", color: "#222", marginBottom: "5px" }}>
          Relevant Coursework
        </h1>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
          Courses and skills I’ve built along the way.
        </p>
      </section>

      {/* Scrollable container */}
      <div style={{ width: "100%", overflow: "auto" }}>
        <svg
          ref={svgRef}
          style={{
            display: "block",
            margin: "0 auto",
          }}
        ></svg>
      </div>
    </div>
  );
};

export default Coursework;
