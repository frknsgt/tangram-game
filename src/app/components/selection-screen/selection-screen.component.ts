import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
})
export class SelectionScreenComponent implements OnInit {
  constructor() {}

  @Output() openlevelScreen: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
}
