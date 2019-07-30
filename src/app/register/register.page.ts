import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
///import { AuthService } from '../../providers/auth-tools/auth-tools'; /// able to use providers for further register
import { PasswordValidator } from '../../validators/password.validator';
import { AlertController } from '@ionic/angular';
/// import { AuthService } from '../../providers/auth-tools/auth-tools'; /// able to use providers for further register
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
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((res2) => {
        this.router.navigateByUrl('home');
      });
  // tslint:disable-next-line: max-line-length
  constructor(private afAuth: AngularFireAuth, private router: Router, private passValidate: PasswordValidator, private alertCtrl: AlertController) { }
  public register(email, password){
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.passValidate.validPassword(password) && email.match(mailFormat)) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
          this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res2) => {
            this.displayHome();
          });
        });
    } else if (!this.passValidate.validPassword(password)) {
       this.invalidPassAlert();
    } else if (!email.match(mailFormat)) {
       this.invalidEmailAlert();
    }
  }
  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Register Failed',
      message: 'Passwords must be at least 6 characters long, including uppercase letters and numbers',
      buttons: ['Try Again']
    });
    (await alert).present();
  }
  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Register Failed',
      message: 'Please enter a valid email',
      buttons: ['Try Again']
    });
    (await alert).present();
  }
  public displayLogin() {
    this.router.navigateByUrl('login');
  public displayHome() {
    this.router.navigateByUrl('home');
  }
  ngOnInit() {
  }

}
