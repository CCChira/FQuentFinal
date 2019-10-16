import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import {UserService} from '../user.service';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'], })

export class RegisterPage implements OnInit {
  public name;
  public email;
  public password;
  public confirmpass;
  public tBarHide = false;
  public tBarIcon1Hide = false;
  public tBarTextCrt = 'Register Page';
  public tBarIcon2Hide = true;
  public fBarHide = true;
  public fBarIcon1Hide = false;
  public fBarTextCrt = '2019© by Flexiloquent™';
  public fBarIcon2Hide = false;
  public user: UserService;
  // tslint:disable-next-line: max-line-length
  constructor(public authService: AuthService, public afAuth: AngularFireAuth, public router: Router, public alertCtrl: AlertController, public userService: UserService, public afStore: AngularFirestore) { }

  public validMail(mail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat); }
  public validPassword(pass) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
    return pass.match(passwordFormat); }
  
  public register() {
  
  if (this.email && this.password) {
    const mail = this.email;
    const name = this.name;
    if (this.validPassword(this.password) && this.validMail(this.email) && this.password === this.confirmpass) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (res) => {
          console.log('user created');
          this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
            (res2) => {
              this.afStore.collection('Users').add({
                name,
                mail
              });
              this.userService.setUser({
                email: this.email,
                uid: res.user.uid
              });
              console.log('user signed');
              this.loggedInAlert();
              return this.displayMarket(); } );
        } );
    } else if (this.validMail(this.email)) {
      console.log('passwords problem');
      return this.invalidPassAlert(); } else {
        console.log('mail incorect sau lipsa');
        return this.invalidEmailAlert(); }
  } else {
   console.log('mail lipsa');
   return this.invalidEmailAlert(); }
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
        return this.displayMarket(); },
      (error) => {
        this.externlogAlert();
        console.log('invalid G+ Credentials');
        console.log(error); }
    );
  }

  async loggedInAlert() {
      const alert = this.alertCtrl.create({
        header: 'Success!',
        message: 'Your user was created and you are now logged in.',
        buttons: ['OK'] } );
      (await alert).present(); }

  async externlogAlert() {
    const alert = this.alertCtrl.create({
      header: 'Service Unavailable!',
      message: 'Something went wrong.',
      buttons: ['TRY AGAIN'] } );
    (await alert).present(); }

  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Registration failed!',
      // tslint:disable-next-line: max-line-length
      message: 'Passwords have to be identical, at least 8 digits long with at least 7 letters and numbers, have both lowercase and uppercase and include at least one special character.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Registration failed!',
      message: 'Please enter a valid email.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
