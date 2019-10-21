import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-lostpass1',
  templateUrl: './lostpass1.page.html',
  styleUrls: ['./lostpass1.page.scss'], })

export class Lostpass1Page implements OnInit {
  private email: string = '';
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'Request Code';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  private validMail(mail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailformat); }

  private getcode() {
    if (this.email) {
      let ok = true;
      if (!this.validMail(this.email)) {
        ok = false;
        console.log('invalid email address');
        return this.invalidEmailAlert(); }
      else {
        this.authService.sendMail(this.email);
        console.log('email sent');
        this.sentMailAlert();
        return this.displayLostpass2(); } }
    else {
      console.log('no email');
      this.invalidEmailAlert(); }
  }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Sending Code Failed!',
      message: 'You need to enter a registred email in order to receive code.',
      buttons: ['TRY AGAIN']  });
    (await alert).present(); }

  async sentMailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Mail sent!',
      message: 'We sent a mail with a code to the indicated address.',
      buttons: ['OK'] });
    (await alert).present(); }

  private displayLostpass2() { this.router.navigateByUrl('lostpass2'); }

  ngOnInit() { }
}
