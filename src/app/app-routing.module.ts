import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelEasyOneComponent, LevelEasyTwoComponent, LevelHardOneComponent } from './pages';

const routes: Routes = [
  { path: '', component: LevelHardOneComponent },
  {path:'1',component: LevelEasyTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
