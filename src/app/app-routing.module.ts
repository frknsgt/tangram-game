import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomepageComponent,
  LevelsComponent,
  LevelManagementComponent,
  AboutComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: HomepageComponent },

  { path: 'level/:level', component: LevelsComponent },
  { path: 'redirect/:id', component: AboutComponent },
  { path: 'levels', component: LevelManagementComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
