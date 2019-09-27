import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], } )

export class LoginPage implements OnInit {
  private email;
  private password;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Login Page';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

  private validMail(mail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat); }

  private logmein() {
    if (this.email && this.password) {
      let ok = true;
      if (!this.validMail(this.email)) {
        ok = false;
        console.log('invalid email address')
        return this.invalidEmailAlert(); }

      else this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (response)  => {
          console.log('logged in with local ID');
          this.loggedInAlert();
          return this.displayMarket(); },
        (error) => {
          console.log('invalid credentials');
          console.log(error);
          return this.invalidEmailOrPassAlert(); }
      );
    }
    else {
      console.log('missing email or password');
      this.invalidEmailOrPassAlert(); }
  }

  private loginWithFacebook() {
    this.authService.loginFacebook().then(
      (res) => {
        console.log('logged in with FB');
        this.loggedInAlert();
        return this.displayMarket(); },
      (res2) => {
        this.externlogAlert();
        console.log('invalid FB credentials');
        console.log(res2); }
    ); }

  private loginWithGoogle() {
    this.authService.loginGoogle().then(
      (res) => {
        console.log('logged in with G+');
        this.loggedInAlert();
        return this.displayMarket(); },
      (res2) => {
        this.externlogAlert();
        console.log('invalid G+ Credentials');
        console.log(res2); }
      ); }

  async invalidEmailOrPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Login Failed!',
      message: 'You need to enter a valid email and password in order to log in.',
      buttons: ['TRY AGAIN'] } );
    (await alert).present(); }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Login failed!',
      message: 'Please enter a valid email.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async loggedInAlert() {
    const alert = this.alertCtrl.create({
      header: 'Success!',
      message: 'You are now logged in.',
      buttons: ['OK'] });
    (await alert).present(); }

  async externlogAlert() {
      const alert = this.alertCtrl.create({
        header: 'Service Unavailable!',
        message: 'Something went wrong.',
        buttons: ['TRY AGAIN'] } );
      (await alert).present(); }

  private displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
