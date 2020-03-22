
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListService } from './list/list.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { config } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
/*var firebaseConfig = {
  apiKey: "AIzaSyA7i1omakXU0p5IkEnZm8h8ZjZKmgw83P0",
  authDomain: "in-line-538cf.firebaseapp.com",
  databaseURL: "https://in-line-538cf.firebaseio.com",
  projectId: "in-line-538cf",
  storageBucket: "in-line-538cf.appspot.com",
  messagingSenderId: "308382310154",
  appId: "1:308382310154:web:8e982143218f529d77a4f3",
  measurementId: "G-G4VQXRV0DR"
};
*/
@NgModule({
  declarations: [
    AppComponent,
    //UserProfileComponent,
    //AddComponent ,
    //ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase /*firebaseConfig*/),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    //ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
