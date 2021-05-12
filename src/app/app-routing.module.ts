import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelEasyOneComponent, LevelHardOneComponent } from './pages';

const routes: Routes = [
  { path: '', component: LevelEasyOneComponent },
  { path: 'level-hard-one', component: LevelHardOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
