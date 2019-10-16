import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
// import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@Component( {
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'], } )

export class MarketPage implements OnInit {
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = "Tool's Market";
  public tBarIcon2Hide: boolean = false;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = 'Add Offers or Requests!';
  public fBarIcon2Hide: boolean = true;

  constructor(public modalCtrl: ModalController, public afAuth: AngularFireAuth, public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  async popBon( bonTip: string, bonPret: string ) {
      const alert = this.alertCtrl.create( {
        header: bonTip,
        message: bonPret,
        buttons: ['OK'] } );
      (await alert).present(); }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewofferPage });
    return await ListModal.present(); }

  /*async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewrequestPage });
    return await ListModal.present(); }
*/
  ngOnInit() { }
}
