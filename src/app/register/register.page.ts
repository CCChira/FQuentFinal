import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private email;
  private password;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  public register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
      this.router.navigateByUrl('login');
    });
  }
  ngOnInit() {
  }

}
