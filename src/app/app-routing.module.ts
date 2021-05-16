import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelEasyOneComponent, LevelHardOneComponent } from './pages';
import {HomepageComponent} from './pages/client';
const routes: Routes = [
  { path: '', component: LevelEasyOneComponent },
  { path:'homepage', component: HomepageComponent },
  { path: 'level-hard-one', component: LevelHardOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
