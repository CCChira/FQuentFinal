import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-newrequest',
  templateUrl: './newrequest.page.html',
  styleUrls: ['./newrequest.page.scss'], })

export class NewrequestPage implements OnInit {
  private title;
  private category;
  private description;
  private reqprice;
  private contactphone;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'New Request';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = 'Put your request on the market!';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public newrequest() {
    if (true /*decizie lipsa pentru verificarea unei cereri noi*/ ) {
      /*actiune lipsa pentru validarea unei cereri noi*/
      this.displayMarket(); }

      else {console.log('cerere incompleta');
        this.invalidRequestAlert(); } }

  async invalidRequestAlert() {
    const alert = this.alertCtrl.create({
      header: 'Request Insert Failed',
      message: 'You need to enter a complete request in order to insert it in the market.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
