import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'], })

export class RegisterPage implements OnInit {
  private name;
  private email;
  private password;
  private confirmpass;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Register Page';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

  private validMail(mail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat); }

  private validPassword(pass) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
    return pass.match(passwordFormat); }

  private register() {
  if (this.email && this.password) {
    if (this.validPassword(this.password) && this.validMail(this.email) && this.password === this.confirmpass) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (res) => {
          console.log('user created');
          this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
            (res2) => {
              console.log('user signed');
              this.loggedInAlert();
              return this.displayMarket(); } );
        } );
    }
    else if (this.validMail(this.email)) {
      console.log('passwords problem');
      return this.invalidPassAlert(); }
      else {
        console.log('mail incorect sau lipsa');
        return this.invalidEmailAlert(); }
  }
  else {
   console.log('mail lipsa');
   return this.invalidEmailAlert(); }
  }

  private loginWithFacebook() {
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

  private loginWithGoogle() {
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
      message: 'Passwords have to be identical, at least 8 digits long with at least 7 letters and numbers, have both lowercase and uppercase and include at least one special character.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Registration failed!',
      message: 'Please enter a valid email.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  private displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
