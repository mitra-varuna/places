import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  applicationName = 'Test Application';
  num = 20;
  parentChanged: boolean;
  private _appService: AppService;

  constructor(appService: AppService) {
    this._appService = appService;
    this.title = appService.servicename;
  }

  changeNumber() {
    this.num = this._appService.testService();
    this.parentChanged = !this.parentChanged;
  }

}
