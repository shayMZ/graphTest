import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {ApplicationData} from "./application-data";
import {RectangleNode} from "./services/rectangleNode";
import {CircleNode} from "./services/circleNode";
import {INode} from "./services/INode";
import {NodeService} from "./services/node.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageReady: boolean = false;
  errorMessage: string | undefined;

  constructor(private http: HttpClient,
              private nodeService: NodeService) {
  }

  ngOnInit(): void {
    this.loadData().then(() => {
      this.pageReady = true;
    })
  }

  async loadData() {
    const url = 'https://private-39ac1f-exercise16.apiary-mock.com/graph/data';
    const result = await firstValueFrom(this.http.get<any>(url)).catch((error) => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);
    });
    ApplicationData.App_title = result.type;
    ApplicationData.App_description = result.description;
    const loadData = (rowData: any, item: INode) => {
      item.description = rowData.description;
      item.properties = rowData.properties;
      item.color = rowData.color;
      item.size = rowData.size;
      return item;
    }

    this.nodeService.nodes = result.nodes.map((row_item: any) => {
      const node = row_item.shape === 'rectangle' ? new RectangleNode(row_item.id) : new CircleNode(row_item.id);
      return loadData(row_item, node);
    });


    /*  Link Item
        color | description | from | id | to | weight
    */
    this.nodeService.links = result.links;
    if (this.nodeService.links != null) {
      this.nodeService.links.forEach(linkItem => {
        const source = this.nodeService.nodes?.find(n => n.id === linkItem.from);
        if (source != null) {
          linkItem.source = source;
        }
        const target = this.nodeService.nodes?.find(n => n.id === linkItem.to);
        if (target != null) {
          linkItem.target = target;
        }
      })
    }
    return true;
  }
}
