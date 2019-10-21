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
  private password: string = '';
  private confirmpass: string = '';
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'Change Password';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  private validPassword(pass) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
    return pass.match(passwordFormat); }

  private changepass() {
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
      message: 'Passwords have to be identical, at least 8 digits long with at least 7 letters and numbers, have both lowercase and uppercase and include at least one special character.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  private displayMarket() { this.router.navigateByUrl('sharemap'); }

  ngOnInit() { }
}
