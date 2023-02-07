import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as d3 from "d3";
import {NodeService} from "../../services/node.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-graph-tooltip',
  templateUrl: './graph-tooltip.component.html',
  styleUrls: ['./graph-tooltip.component.scss']
})
export class GraphTooltipComponent implements OnInit, OnDestroy {
  private _properties: any;
  onMouseMoveSubscription?: Subscription;

  get properties() {
    return this._properties;
  }

  @Input() set properties(value: any) {
    this._properties = value;
    if (value != null)
      this.show();
    else
      this.close();
  }

  items?: any;
  tooltip: any;

  constructor(private nodeService: NodeService) {
  }

  ngOnInit(): void {
    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    this.tooltip = d3.select("#div_template")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "fixed")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")

    this.onMouseMoveSubscription = this.nodeService.onMouseMove.subscribe((e) => {
      console.log('mouse move');
      this.move(e)
    });
  }

  show() {
    this.items = Object.entries(this.properties).map(([key, value]) => `${key}: ${value}`);
    this.tooltip
      .style("opacity", 1)
  }

  move(e: any) {
    console.log(e);
    this.tooltip
      .style("left", (d3.pointer(e, e.target)[0] + 90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.pointer(e, e.target)[1]) + "px")
  }

  close() {
    if (this.tooltip != null)
      this.tooltip
        .transition()
        .duration(200)
        .style("opacity", 0)
  }

  ngOnDestroy(): void {
    this.onMouseMoveSubscription?.unsubscribe();
  }
}
