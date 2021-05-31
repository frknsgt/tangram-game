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

  persons = [
    {
      Name: 'Furkan Söğüt',
      Description: 'Full-Stack Developer',
      ImagePath: '../../../../assets/img-about/sögüt.jpg',
    },
    {
      Name: 'Ezgi Selin Kılıç',
      Description: 'Frontend Developer',
      ImagePath: '../../../../assets/img-about/ezgi.jpg',
    },
    {
      Name: 'Ceyda Albayrak',
      Description: 'Frontend Developer',
      ImagePath: '../../../../assets/img-about/ceyda.jpg',
    },
    {
      Name: 'Sefa Dedeoğlu',
      Description: 'Full-Stack Developer',
      ImagePath: '../../../../assets/img-about/sefa.jpg',
    },
    {
      Name: 'Furkan Gülcan',
      Description: 'Frontend Developer',
      ImagePath: '../../../../assets/img-about/furkan2.jpg',
    },
  ];

  ngOnInit(): void {
    const id = this._activateRoute.snapshot.paramMap.get('id');
    if (id) this._router.navigate(['level', id]);
  }
}
