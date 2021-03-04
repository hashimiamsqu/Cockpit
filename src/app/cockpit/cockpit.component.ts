import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = ''; when using ngModel a local properties has to be defined inorder to capture the data.
  // newServerContent = '';

  // tslint:disable-next-line:typedef
  onAddServer(
    newServerName: HTMLInputElement,
    newServerContent: HTMLInputElement
  ) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value,
    });
  }
  // tslint:disable-next-line:typedef
  onAddBlueprint(
    newServerName: HTMLInputElement,
    newServerContent: HTMLInputElement
  ) {
    this.bluePrintCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
