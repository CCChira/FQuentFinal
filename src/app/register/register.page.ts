import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
/// import { AuthService } from '../../providers/auth-tools/auth-tools'; /// able to use providers for further register
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private name;
  private email;
  private password;
  private confirmpassword;

  // tslint:disable-next-line: max-line-length
  constructor(private afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

  public register( ) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.passValidate.validPassword(password) && email.match(mailFormat)) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
          this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res2) => {
            this.displayHome();
          });
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (this.password.match(passwordFormat) && this.email.match(mailFormat)) {
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((res2) =>{
              this.displayHome();
            });
        });
    } else if (!this.passValidate.validPassword(password)) {
       this.invalidPassAlert();
    } else if (!email.match(mailFormat)) {
    } else if (!this.password.match(passwordFormat)) {
       this.invalidPassAlert()
    } else if (!this.email.match(mailFormat)) {
       this.invalidEmailAlert();
    }
    } /*else if (!this.password === this.confirmpassword) {
      this.invalidPassAlert2();
    }*/
  }
  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Register Failed',
      message: 'Passwords must be at least 6 characters long, including uppercase letters and numbers',
      message: 'Passwords must be at least 8 characters long, including uppercase letters and numbers and they have to match',
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
  public displayHome() {
    this.router.navigateByUrl('home');
  }
  ngOnInit() {
  }

}
