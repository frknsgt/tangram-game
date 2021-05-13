import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-easy-one',
  templateUrl: './level-easy-one.component.html',
  styleUrls: ['./level-easy-one.component.scss'],
})
export class LevelEasyOneComponent implements OnInit {
  constructor(
    private _router:Router
  ) {}

  dragPosition =[
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ] ;
  objectPosition=[
    { x: 128.5, y: 62 },
    { x: 128.5, y: 22 },
    { x: 70.5, y: -29 },
    { x: 67.5, y: 48 },
    { x: -55.5, y: -28 },
    { x: -88.5, y: 19 },
    { x: -89.5, y: -24 }
  ]
  objectControl=[
    false,false,false,false,false,false,false
  ]

  ngOnInit(): void {

  }
  routefonk1(){
    this._router.navigateByUrl('level-hard-one')
  }
  routefonk2(){
this._router.navigateByUrl('level-hard-one')
  }
  routefonk3(){
    this._router.navigateByUrl('level-hard-one')
  }
  endgame(){
    let shand = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "block";
    }
  }

  dragEnd($event: CdkDragEnd) {
    let x= $event.source.getFreeDragPosition().x;
    let y= $event.source.getFreeDragPosition().y;
    let id=parseInt($event.source.element.nativeElement.id)
    this.objectControl[id-1]=false;
    let aralikx=10,araliky=10;
    let screenx = this._getScreenSize().w/2 , screeny = this._getScreenSize().h/2;
      if(screenx-aralikx<x+this.objectPosition[id-1].x&&x+this.objectPosition[id-1].x<screenx+aralikx&&screeny-araliky<y+this.objectPosition[id-1].y&&y+this.objectPosition[id-1].y<screeny+araliky){
      //  this.changePosition(-this.objectPosition[id-1].x,-this.objectPosition[id-1].y,id)
        this.objectControl[id-1]=true;
      }
    if(this.objectControl[0]&&this.objectControl[1]&&this.objectControl[2]&&this.objectControl[3]&&this.objectControl[4]&&this.objectControl[5]&&this.objectControl[6]){
      this.endgame();
   // this._router.navigateByUrl('level-hard-one')
    }
  }

 /* changePosition(objectx, objecty, id) {
    let w=this._getScreenSize().w/2
    let h=this._getScreenSize().h/2
    this.dragPosition[id-1] = {
      x: w + objectx,
      y: h + objecty,
    };
    
    
  }
*/
  _getScreenSize(): { w: number; h: number } {
    return {
      w:
        document.documentElement.clientWidth,
      h:
        document.documentElement.clientHeight
    };
  }
}


window.onclick = function(event){
  let shand = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
  if(shand!=null){
    let modal = shand[0];
    if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  
}

