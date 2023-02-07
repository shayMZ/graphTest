import {Injectable} from '@angular/core';
import {INode} from "./INode";
import {DataLink} from "./data-link";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  nodes?: Array<INode>;
  links?: Array<DataLink>;
  onMouseMove = new Subject<any>();

  constructor() {
  }

}
