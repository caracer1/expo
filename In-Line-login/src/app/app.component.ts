import { AuthService } from './services/auth.service';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
//import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //users: Observable<any[]>;
  /*constructor(firestore: AngularFirestore){
    this.users = firestore.collection('users').valueChanges();

  }*/
  constructor(public auth: AuthService) {}
  title = 'Angular In-Line';
}
