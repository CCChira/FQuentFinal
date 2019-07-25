import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email;
  private pass;
  constructor(private afAuth: AngularFireAuth) { }
  public login() {
    return this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass);
  }

  ngOnInit() {
  }

}
