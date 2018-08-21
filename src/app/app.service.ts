import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  servicename: string;

  constructor() {
    this.servicename = 'Hello Angular';
  }

  testService() {
    return Math.random();
  }
}
