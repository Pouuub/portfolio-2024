"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface TimelineEvent {
  date?: string;
  image?: string;
  event: string;
  description?: string;
  side?: "left" | "right";
}

interface TimelineProps {
  data: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(
    function createSvg() {
      if (!ref.current) return;

      const svg = d3.select(ref.current);

      const renderTimeline = () => {
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const containerWidth = ref.current?.parentElement?.clientWidth || 0;
        const width = containerWidth - margin.left - margin.right;
        let totalHeight = 0;

        const itemHeights: number[] = [];
        const paddingBetweenItems = 60;
        const itemWidth = 340;

        data.forEach((d) => {
          const div = document.createElement("div");
          div.style.width = `${itemWidth}px`;
          div.style.position = "absolute";
          div.style.visibility = "hidden";
          div.innerHTML = `
          <div style="text-align: center; font-weight: bold; font-size: 14px; margin-bottom: 5px;">${d.date || ""}</div>
          ${
            d.image
              ? `<img src="${d.image}" alt="${d.event}" style="width:100%; height: auto; max-height: 80px; object-fit: cover; margin-bottom: 5px;">`
              : ""
          }
          <div style="font-weight: bold; margin-bottom: 3px; font-size: 12px;">${d.event}</div>
          <div style="overflow-wrap: break-word; font-size: 12px;">${d.description}</div>
        `;
          document.body.appendChild(div);
          const height = div.clientHeight + paddingBetweenItems;
          itemHeights.push(height);
          totalHeight += height;
          document.body.removeChild(div);
        });

        const y = d3
          .scaleLinear()
          .domain([0, data.length - 1])
          .range([0, totalHeight]);

        const timeline = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        timeline
          .append("line")
          .attr("x1", width / 2)
          .attr("x2", width / 2)
          .attr("y1", 0)
          .attr("y2", y(data.length - 1))
          .attr("stroke", "#b0b4b6")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "5, 5");

        const eventGroup = timeline
          .selectAll<SVGGElement, TimelineEvent>(".event")
          .data(data)
          .enter()
          .append("g")
          .attr("class", "event")
          .attr("transform", (d, i) => {
            const yOffset = d3.sum(itemHeights.slice(0, i));
            return `translate(${width / 2},${yOffset})`;
          });

        eventGroup.append("circle").attr("r", 4).attr("fill", "#d23d26");

        eventGroup
          .append("foreignObject")
          .attr("x", (d) => (d.side === "left" ? -itemWidth - 10 : 10))
          .attr("y", -20)
          .attr("width", itemWidth)
          .attr("height", (d, i) => (d.image ? itemHeights[i] + 200 : itemHeights[i]))
          .append("xhtml:div")
          .style("position", "relative")
          .style("text-align", "center")
          .style("border", "1px solid #ccc")
          .style("padding", "8px")
          .style("border-radius", "8px")
          .style("background-color", "#f9f9f9")
          .style("box-sizing", "border-box")
          .html(
            (d) => `
        <div style="width: 100%">
          ${
            d.date
              ? `<div style="color: #d23d26; text-align: center; font-weight: bold; font-size: 14px; margin-bottom: 5px;">${d.date}</div>`
              : ""
          }
          ${
            d.image
              ? `<img src="${d.image}" alt="${d.event}" style="display: block; margin: 0 auto; width: auto; height: auto; max-height: 80px; max-width: 100%; object-fit: cover; margin-bottom: 10px;">`
              : ""
          }
          <div style="font-weight: bold; margin-bottom: 3px; font-size: 12px;">${d.event}</div>
          ${d.description ? `<div style="overflow-wrap: break-word; font-size: 12px;">${d.description}</div>` : ""}
        </div>
          `
          );

        svg.attr("width", containerWidth).attr("height", totalHeight + paddingBetweenItems);
      };

      renderTimeline();

      const resizeObserver = new ResizeObserver(() => {
        renderTimeline();
      });

      resizeObserver.observe(ref.current.parentElement as Element);

      return () => {
        resizeObserver.disconnect();
      };
    },
    [data]
  );

  return <svg ref={ref} />;
};

export default Timeline;
