import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this._activateRoute.snapshot.paramMap.get('id');
    if (id) this._router.navigate(['level', id]);
  }
}
