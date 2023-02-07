import {SimulationLinkDatum, SimulationNodeDatum} from "d3-force";

export class DataLink implements SimulationLinkDatum<SimulationNodeDatum> {
  id!: number;
  from!: string;
  to!: string;
  description?: string;
  color?: string;
  thickness?: number;

  constructor(id: number) {
    this.id = id;
    this.color = 'Black';
    this.thickness = 3;
  }

  index?: number | undefined;
  source!: SimulationNodeDatum;
  target!: SimulationNodeDatum;
}
