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
  selector: 'app-lostpass1',
  templateUrl: './lostpass1.page.html',
  styleUrls: ['./lostpass1.page.scss'], } )

export class Lostpass1Page implements OnInit {
  private email;
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public getcode() {
    function validMail(mail) {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return mail.match(mailformat); }

    if (this.email) {
      let ok = true;
      if (!validMail(this.email)) {
        ok = false;
        this.invalidEmailAlert(); }
        else {/*Lipsa partea de actiune pentru trimiterea mailului de recuperare*/
          this.displayLostpass2(); } }

      else {console.log('fara email');
        this.invalidEmailAlert(); }
  }

  async invalidEmailAlert() {
    const alert = this.alertCtrl.create({
      header: 'Sending Code Failed',
      message: 'You need to enter a registred email in order to receive code.',
      buttons: ['TRY AGAIN']
    });
    (await alert).present(); }

  public displayLostpass2() {
    this.router.navigateByUrl('lostpass2'); }

  ngOnInit() {}
}
