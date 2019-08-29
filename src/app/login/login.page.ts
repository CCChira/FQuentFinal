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
  styleUrls: ['./login.page.scss'], } )

export class LoginPage implements OnInit {
  private email;
  private pass;
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public login() {
    function validMail(mail) {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return mail.match(mailformat); }

    if (this.email && this.pass) {
      let ok = true;
      if (!validMail(this.email)) {
        ok = false;
        this.invalidEmailAlert(); }

      this.authService.login(this.email, this.pass).then(response => {
          console.log(response);
          this.displayMarket(); },   // tslint:disable-next-line: no-unused-expression

      (error) => {
        this.invalidEmailOrPassAlert();
        console.log('invalid credentials');
        console.log(error); }
       ); }

      else {console.log('fara email sau parola');
        this.invalidEmailOrPassAlert(); }
  }

  public loginWithFacebook() {
    this.facebookAlert();
    this.displayMarket();
/*    this.authService.loginFacebook().then(
      response => console.log(response),
      er
    )
*/  }

  public loginWithGoogle() {
    this.googleAlert();
    this.displayMarket();
  }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  async invalidEmailOrPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Login Failed',
      message: 'You need to enter a valid email and password in order to log in.',
      buttons: ['TRY AGAIN'] } );
    (await alert).present(); }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Login failed!',
      message: 'Please enter a valid email.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async facebookAlert() {
      const alert = this.alertCtrl.create({
        header: 'Service Unavailable',
        message: 'Something went wrong.',
        buttons: ['TRY AGAIN'] } );
      (await alert).present(); }

  async googleAlert() {
      const alert = this.alertCtrl.create({
        header: 'Service Unavailable',
        message: 'Something went wrong.',
        buttons: ['TRY AGAIN'] } );
      (await alert).present(); }

  ngOnInit() { }
}
