import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email;
  private pass;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  public login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass).then(data => {
      this.router.navigateByUrl('home');
  });
  }

  ngOnInit() {
  }

}
