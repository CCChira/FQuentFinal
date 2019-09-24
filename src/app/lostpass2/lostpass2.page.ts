import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-lostpass2',
  templateUrl: './lostpass2.page.html',
  styleUrls: ['./lostpass2.page.scss'], })

export class Lostpass2Page implements OnInit {
  private digit1;
  private digit2;
  private digit3;
  private digit4;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Insert Code';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private afAuth: AngularFireAuth, private router: Router, private alertCtrl: AlertController) { }

  private newpass() {
    if ( this.digit1 === "1" && this.digit2 === "2" && this.digit3 === "3" && this.digit4 === "4" /* lipsa decizie verificare cod*/ ) {
      /* lipsa actiune dupa verificare cod*/
      console.log('valid code');
      this.validCodeAlert();
      return this.displayLospass3(); }
    else {
      console.log('incorrect code');
      this.invalidCodeAlert(); }
  }

  async validCodeAlert() {
    const alert = this.alertCtrl.create({
      header: 'The code was good!',
      message: 'You can now change your password.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidCodeAlert() {
    const alert = this.alertCtrl.create({
      header: 'Code Verifying Failed!',
      message: 'You need to enter a valid code in order to change password.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  private displayLospass3() {
    this.router.navigateByUrl('lostpass3'); }

  ngOnInit() { }
}
