import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LevelEasyOneComponent,
  LevelHardOneComponent,
  LevelMediumOneComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    LevelEasyOneComponent,
    LevelHardOneComponent,
    LevelMediumOneComponent,
  ],
  imports: [BrowserModule, DragDropModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
