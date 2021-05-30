import { Component, OnInit } from '@angular/core';
import { faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']

})
export class AboutComponent implements OnInit {

  constructor() { }
  github=faGithub
  instagram=faInstagram

  ngOnInit(): void {
  }

}
