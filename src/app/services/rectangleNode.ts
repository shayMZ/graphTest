import {INode} from "./INode";

export class RectangleNode implements INode {
  color: string | undefined;
  description: string | undefined;
  fill: boolean | undefined;
  id: string;
  properties?: {};
  size: number | undefined;

  constructor(id: string) {
    this.id = id;
  }

  showInfo(): void {
  }
}
