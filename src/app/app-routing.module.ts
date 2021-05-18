import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelEasyOneComponent,LevelHardOneComponent,HomepageComponent } from './pages';

const routes: Routes = [
  
 
  {path : '',component:HomepageComponent},

  { path: ':level', component: LevelEasyOneComponent},
  {path : 'redirect/:id',component:LevelHardOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
