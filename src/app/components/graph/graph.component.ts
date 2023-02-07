import {AfterViewInit, Component} from '@angular/core';
import * as d3 from 'd3';
import {NodeService} from "../../services/node.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit {
  properties: any;

  constructor(private nodeService: NodeService) {
  }

  ngAfterViewInit() {
    this.drawGraph();
  }

  drawGraph() {
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    const simulation = d3.forceSimulation(this.nodeService.nodes)
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(this.nodeService.links).distance(200))
      .on("tick", ticked);


    const mouseover = (e: any) => {
      this.properties = this.nodeService.nodes?.find(n => n.id === e.target.id)?.properties;
    }
    const mousemove = (e: any) => {
      this.properties = this.nodeService.nodes?.find(n => n.id === e.target.id)?.properties;
      this.nodeService.onMouseMove?.next(e);
    }
    const mouseleave = () => {
      this.properties = null;
    }

    const node =
      svg.append("g")
        .selectAll("circle")
        .data(this.nodeService.nodes!)
        .enter().append("circle")
        .attr("id", function (d) {
          return d.id
        })
        .attr("r", function (d) {
          return d.size != null ? d.size : 5;
        })
        .style("fill", function (d) {
          return d.color != null ? d.color : 'green';
        })

    const link = svg.append("g")
      .selectAll("line")
      .data(this.nodeService.links!)
      .enter().append("line")
      .attr("stroke", "blue");

    function ticked() {
      link
        .attr("x1", function (d) {
          return d.source!.x!;
        })
        .attr("y1", function (d) {
          return d.source!.y!;
        })
        .attr("x2", function (d) {
          return d.target!.x!;
        })
        .attr("y2", function (d) {
          return d.target!.y!;
        });
      node
        .attr("cx", function (d) {
          return d.x!;
        })
        .attr("cy", function (d) {
          return d.y!;
        })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
    }
  }

}
