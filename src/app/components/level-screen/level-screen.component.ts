import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-screen',
  templateUrl: './level-screen.component.html',
  styleUrls: ['./level-screen.component.scss'],
})
export class LevelScreenComponent implements OnInit {
  constructor(private _router: Router) {}

  @Input() level: string;

  ngOnInit(): void {}

  openGame(choose) {
    if (this.level == 'easy') this._router.navigate(['level', choose]);
    else if (this.level == 'medium')
      this._router.navigate(['level', choose + 3]);
    else if (this.level == 'hard') this._router.navigate(['level', choose + 6]);
  }
}
