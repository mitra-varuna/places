import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {
  @Input()
  works: any;
  @Input()
  changed: boolean;

  @Output()
  myowntype: string;

  @Output()
  notifyParent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['changed'];
    if (change.currentValue !== change.previousValue) {
      this.works = `Parent Clicked ${this.changed}`;
    }
  }

}
