import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
  function changeColor ( $id )
    {
        document.body.style.backgroundColor = document.getElementById($id).innerHTML;
    }
  }

}


