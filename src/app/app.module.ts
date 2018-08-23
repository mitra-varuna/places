import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {SearchComponent} from './test/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
