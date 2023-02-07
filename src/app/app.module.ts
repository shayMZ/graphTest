import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarComponent} from './bar/bar.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { GraphComponent } from './components/graph/graph.component';
import { GraphTooltipComponent } from './components/graph-tooltip/graph-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HeaderComponent,
    GraphComponent,
    GraphTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
