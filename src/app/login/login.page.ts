import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { UserService } from '../user.service';
import { OfferService } from '../offer.service';
import {Push, PushObject, PushOptions} from '@ionic-native/push/ngx';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], } )

export class LoginPage implements OnInit {
  public email;
  public password;
  public tBarHide = false;
  public tBarIcon1Hide = false;
  public tBarTextCrt = 'Login Page';
  public tBarIcon2Hide = true;
  public fBarHide = true;
  public fBarIcon1Hide = false;
  public fBarTextCrt = '2019© by Flexiloquent™';
  public fBarIcon2Hide = false;
  offerDoc: any;
  // tslint:disable-next-line: max-line-length
  pushes: any = [];
  // tslint:disable-next-line: max-line-length

  constructor(public plt: Platform, public authService: AuthService, public afAuth: AngularFireAuth, public router: Router, public alertCtrl: AlertController, public userService: UserService, public offerService: OfferService) { }

  public validMail(mail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat); }

  public logmein() {
    if (this.email && this.password) {
      const mail = this.email;
      let ok = true;
      if (!this.validMail(this.email)) {
        ok = false;
        console.log('invalid email address');
        return this.invalidEmailAlert() } else { this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (response) => {

          console.log(response);
          this.loggedInAlert();
          this.userService.setUser({
            email: mail,
            uid: response.user.uid
        });

          return this.displayMarket();
        },
        (error) => {
          console.log('invalid credentials');
          console.log(error);
          return this.invalidEmailOrPassAlert(); }
      );
      }
    } else {
      console.log('missing email or password');
      this.invalidEmailOrPassAlert(); }
  }

  public loginWithFacebook() {
    this.authService.loginFacebook().then(
      (response) => {
        console.log(response);
        this.loggedInAlert();
        return this.displayMarket(); },
      (error) => {
        this.externlogAlert();
        console.log('invalid FB credentials');
        console.log(error); }
    );
  }

  public loginWithGoogle() {
    this.authService.loginGoogle().then(
      (response) => {
        console.log(response);
        this.loggedInAlert();
        return this.displayMarket();},
    (error) => {
      this.externlogAlert();
      console.log('invalid G+ Credentials');
      console.log(error); }
     );
  }

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

  public displayMarket() {
    this.router.navigateByUrl('share-home'); }

ngOnInit() {
    this.offerService.readOffer().valueChanges().subscribe(res => {
      this.offerDoc = res;
      // console.log(this.offerDoc);
    });
   }
}
