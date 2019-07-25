import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private email;
  private password;
  constructor(private afAuth: AngularFireAuth) { }
  public register() {
    return this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
  }
  ngOnInit() {
  }

}
