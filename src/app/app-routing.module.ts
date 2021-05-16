import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelEasyOneComponent, LevelHardOneComponent } from './pages';
import { LevelScreenComponent } from './pages/client/components/level-screen/level-screen.component';
import { SelectionScreenComponent } from './pages/client/components/selection-screen/selection-screen.component';

const routes: Routes = [
  { path: '', component: LevelEasyOneComponent },
  { path: 'level-hard-one', component: LevelHardOneComponent },
  { path: 'selection-screen', component:SelectionScreenComponent},
  {path: 'levels',component:LevelScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
