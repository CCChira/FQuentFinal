import { Component, OnInit } from '@angular/core';
/// import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth-tools/auth-tools';
/// import 'rxjs/add/operator/first';
// import { FormBuilder, FormGroup, Validators} from '@angular/forms';
/// import { EmailValidator } from '../../validators/email.validator';
import { AlertController } from '@ionic/angular';
/// import { async } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email;
  private pass;
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }
  getHomePage() {
    function validMail(mail) {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return mail.match(mailformat);
    }
    if (this.email && this.pass) {
      let ok = true;
      if (!validMail) {
      if (!validMail(this.email)) {
        ok = false;
        this.invalidEmailOrPassAlert();
      }
      this.authService.login(this.email, this.pass).then(response => {
        console.log(response);
        this.router.navigateByUrl('home');
      // tslint:disable-next-line: no-unused-expression
      },  (error) => {
        this.invalidEmailOrPassAlert();
        console.log('nada');
        console.log(error);
      });
    } else {console.log('fara email/parola');
            this.invalidEmailOrPassAlert();
          } /// no email no pass error
          }
  }
  getRegisterPage() {
    this.router.navigateByUrl('register');
  }
  async invalidEmailOrPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Login Failed',
      message: 'You need to enter a valid email and password in order to log in.',
      buttons: ['Try Again']
    });
    (await alert).present();
  }
  /*loginWithFacebook() {
    this.authService.loginFacebook().then(
      response => console.log(response),
      er
    )
  }*/
  ngOnInit() {
  }

}
