import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-lostpass3',
  templateUrl: './lostpass3.page.html',
  styleUrls: ['./lostpass3.page.scss'], })

export class Lostpass3Page implements OnInit {
  private password;
  private confirmpass;
  constructor(private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public changepass() {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{8,20}$/;
    if (this.password.match(passwordFormat) && this.password === this.confirmpass) {
      /*actiune lipsa pentru salvarea parolei noi*/
      this.displayMarket(); }

      else if (this.password.match(passwordFormat)) {
        console.log('parole diferite');
        this.invalidPassAlert(); }

        else if (!this.password.match(passwordFormat)) {
          console.log('parola slaba');
          this.invalidPassAlert(); }
  }

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
