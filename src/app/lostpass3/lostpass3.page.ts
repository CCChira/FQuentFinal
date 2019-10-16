import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-lostpass3',
  templateUrl: './lostpass3.page.html',
  styleUrls: ['./lostpass3.page.scss'], })

export class Lostpass3Page implements OnInit {
  public password;
  public confirmpass;
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'Change Password';
  public tBarIcon2Hide: boolean = true;
  public fBarHide: boolean = true;
  public fBarIcon1Hide: boolean = false;
  public fBarTextCrt = '2019© by Flexiloquent™';
  public fBarIcon2Hide: boolean = false;

  constructor(public afAuth: AngularFireAuth, public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  public validPassword(pass) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
    return pass.match(passwordFormat); }

  public changepass() {

    if (this.password) {
      if (this.validPassword(this.password) && this.password === this.confirmpass) {
        /* lipsa actiune pentru salvarea parolei noi si logarea imediata*/
        console.log('good match')
        this.validPassAlert();
        return this.displayMarket(); }
      else if (this.validPassword(this.password)) {
        console.log('different passwords');
        return this.invalidPassAlert(); }
        else {
          console.log('bad password');
          return this.invalidPassAlert(); } }
    else {
      console.log('no password');
      this.invalidPassAlert(); }
  }

  async validPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'The password was changed!',
      message: 'You are logged now with the new password.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Password change failed!',
      message: 'Passwords must include at least 8 alphanumeric characters (lowercase, uppercase letters and numbers) and they have to be identical.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
