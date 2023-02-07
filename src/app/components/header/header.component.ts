import {Component, Input, OnInit} from '@angular/core';
import {ApplicationData} from "../../application-data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get title(): string {
    return ApplicationData.App_title;
  };

  get description(): string {
    return ApplicationData.App_description
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
