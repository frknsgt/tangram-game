import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import {
  HomepageComponent,
  AboutComponent,
  LevelsComponent,
  LevelManagementComponent,
} from './pages';
import { LevelScreenComponent, SelectionScreenComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    LevelScreenComponent,
    LevelsComponent,
    SelectionScreenComponent,
    LevelManagementComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
