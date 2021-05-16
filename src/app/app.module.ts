import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LevelEasyOneComponent,
  LevelHardOneComponent,
  LevelMediumOneComponent,
  HomepageComponent,
  AboutComponent,
} from './pages';

import { LevelScreenComponent } from './pages/client/components/level-screen/level-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LevelEasyOneComponent,
    LevelHardOneComponent,
    LevelMediumOneComponent,
    HomepageComponent,
    AboutComponent,
   
    LevelScreenComponent,
  ],
  imports: [BrowserModule, DragDropModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
