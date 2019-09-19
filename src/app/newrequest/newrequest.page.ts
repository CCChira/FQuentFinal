import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalCtrl: ModalController, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public newrequest() {
    if (true /*decizie lipsa pentru verificarea unei cereri noi*/ ) {
      /*actiune lipsa pentru validarea unei cereri noi*/
      this.dismissNewrequestModal();
      this.validRequestAlert(); }

      else {console.log('cerere incompleta');
        this.invalidRequestAlert(); } }

  async validRequestAlert() {
    const alert = this.alertCtrl.create({
      header: 'Request Inserted!',
      message: 'Your request is now presented to the market.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidRequestAlert() {
    const alert = this.alertCtrl.create({
      header: 'Request Insert Failed',
      message: 'You need to enter a complete request in order to insert it in the market.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  async dismissNewrequestModal() { await this.modalCtrl.dismiss() }

  ngOnInit() { }
}
