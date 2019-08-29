import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lostpass2',
  templateUrl: './lostpass2.page.html',
  styleUrls: ['./lostpass2.page.scss'], })

export class Lostpass2Page implements OnInit {
  private digit1;
  private digit2;
  private digit3;
  private digit4;
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public newpass() {
    if ( this.digit1 === "1" && this.digit2 === "2" && this.digit3 === "3" && this.digit4 === "4" /* lipsa decizie verificare cod*/ ) {
      /*actiune lipsa dupa verificare cod*/
      this.displayLospass3(); }

      else {console.log('cod incorect');
        this.invalidCodeAlert(); }  }

  async invalidCodeAlert() {
    const alert = this.alertCtrl.create({
      header: 'Code Verifying Failed',
      message: 'You need to enter a valid code in order to change password.',
      buttons: ['TRY AGAIN']  });
    (await alert).present(); }

  public displayLospass3() {
    this.router.navigateByUrl('lostpass3'); }

  ngOnInit() { }
}
