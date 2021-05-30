import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  LevelEasyOneComponent,
  LevelHardOneComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'level-hard-one', component: LevelHardOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
