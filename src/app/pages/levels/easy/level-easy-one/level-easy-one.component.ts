import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-level-easy-one',
  templateUrl: './level-easy-one.component.html',
  styleUrls: ['./level-easy-one.component.scss'],
})
export class LevelEasyOneComponent implements OnInit {
  constructor(
    private _router:Router,private db: AngularFirestore,private activatedRoute: ActivatedRoute
  ) {
  }

  dragPosition =[]
  objectPosition=[]
  objectControl=[]
  gameStart:boolean=true;
  endGameControl:boolean=false;
  currentLevel:string;
  level:string="1";
  ngOnInit(): void {
    
    this.level=this.activatedRoute.snapshot.paramMap.get('level');
    if(+this.level<1||+this.level>9){
      this._router.navigateByUrl('');
    }else{
    this.db.collection("levels").doc(this.level).valueChanges().subscribe((ss)=>{
      this.setArrays(ss);
    })
  }

  }


  mainMenu(){
    this._router.navigateByUrl('')
  }
  nextLevel(){
  let a :number=+this.level;
  a=a+1;
  let level:string=a.toString();
  this._router.navigate(['redirect',level])


  }

  endgame(){
    this.endGameControl=true;
  }


  setArrays(level){
    let deneme:string = level.a;
    this.currentLevel=level.b;
    var sayac=0;
    for (var _i = 0; _i < deneme.length; _i++) {
      var num = deneme[_i];
      if(num=='/'){
        sayac++;
      }
     
    }
    let koordinats=deneme.split('/',sayac)
    for (var _i = 0; _i < koordinats.length; _i++) {
      var num = koordinats[_i];
      let xAndy = num.split(',',2)
      let x:number = +xAndy[0],y:number=+xAndy[1];
      this.objectPosition.push({x:x,y:y})
      this.dragPosition.push({x:0,y:0})
      this.objectControl.push(false);
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
        this.changePosition(-this.objectPosition[id-1].x,-this.objectPosition[id-1].y,id)
        this.objectControl[id-1]=true;
      }
      if(x+this.objectPosition[id-1].x>screenx*2||x+this.objectPosition[id-1].x<0||y+this.objectPosition[id-1].y>screeny*2||y+this.objectPosition[id-1].y<0){
        this.changePosition(0,0,id,true)
      }
      let control:number=0;
    for(var i=0;i<this.objectControl.length;i++){
      if(this.objectControl[i]==true){
        control++;
      }
    }
    if(control==this.objectControl.length){
      this.endgame();
    }
  }

  changePosition(objectx, objecty, id, control=false) {
    let w=this._getScreenSize().w/2
    let h=this._getScreenSize().h/2
    this.dragPosition[id-1] = {
      x: control?objectx: w+ objectx,
      y: control?objecty: h+ objecty,
    };
    
    
  }

  _getScreenSize(): { w: number; h: number } {
    return {
      w:
        document.documentElement.clientWidth,
      h:
        document.documentElement.clientHeight
    };
  }
}