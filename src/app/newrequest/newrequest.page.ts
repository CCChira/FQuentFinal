import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-newrequest',
  templateUrl: './newrequest.page.html',
  styleUrls: ['./newrequest.page.scss'], })

export class NewrequestPage implements OnInit {
  private title: string = '';
  private category: string = '';
  private description: string = '';
  private reqprice: string = '';
  private contactphone: string = '';

  constructor(private modalCtrl: ModalController, private router: Router, private alertCtrl: AlertController) { }

  private newRequest() {
    if (true /*decizie lipsa pentru verificarea unei cereri noi*/ ) {
      /*actiune lipsa pentru validarea unei cereri noi*/
      console.log('cerere inserata');
      this.dismissNewrequestModal();
      this.validRequestAlert(); }

    else {console.log('cerere incompleta');
      this.dismissNewrequestModal();
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
