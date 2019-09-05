import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
/// import { AuthService } from '../../providers/auth-tools/auth-tools'; /// able to use providers for further register

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'], })

export class RegisterPage implements OnInit {
  private name;
  private email;
  private password;
  private confirmpass;
  // tslint:disable-next-line: max-line-length
  constructor(private afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

  public register() {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{8,20}$/;
    if (this.password.match(passwordFormat) && this.email.match(mailFormat) && this.password === this.confirmpass) {
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((res2) => {
              this.displayMarket();
            } );
        } ); }
      else if (this.email.match(mailFormat)) {
        console.log('parole diferite');
        this.invalidPassAlert(); }
        else if (!this.email.match(mailFormat)) {
          console.log('mail incorect');
          this.invalidEmailAlert(); } }

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

  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Register failed!',
      message: 'Passwords must include at least 8 alphanumeric characters (lowercase, uppercase letters and numbers) and they have to be identical.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Register failed!',
      message: 'Please enter a valid email.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
