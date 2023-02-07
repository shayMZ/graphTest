import {SimulationNodeDatum} from "d3-force";

export interface INode extends SimulationNodeDatum {
  color: string | undefined;
  description: string | undefined;
  fill: boolean | undefined;
  id: string;
  size: number | undefined;
  properties?: {};

  showInfo(): void;
}
