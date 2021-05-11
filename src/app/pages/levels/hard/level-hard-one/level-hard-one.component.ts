import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-level-hard-one',
  templateUrl: './level-hard-one.component.html',
  styleUrls: ['./level-hard-one.component.scss'],
})
export class LevelHardOneComponent implements OnInit {
  constructor() {}

  dragPosition = { x: 0, y: 0 };
  sefa:number;
  furkan:string="furkan";

  ngOnInit(): void {}

  dragEnd($event: CdkDragEnd) {
    console.log($event.source.getFreeDragPosition());
  }
  changePosition() {
    this.dragPosition = {
      x: this.dragPosition.x + 50,
      y: this.dragPosition.y + 50,
    };
  }
  test(isim){
    alert(isim +" sa ")
  }
}
