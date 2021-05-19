import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-management',
  templateUrl: './level-management.component.html',
  styleUrls: ['./level-management.component.scss'],
})
export class LevelManagementComponent implements OnInit {
  constructor() {}

  openLevelScreen = false;
  level: string;
  ngOnInit(): void {}

  openlevelScreen(event) {
    this.openLevelScreen = true;
    this.level = event;
  }
}
