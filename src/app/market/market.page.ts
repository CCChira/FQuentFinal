import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'], } )

export class MarketPage implements OnInit {
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = "Tool's Market";
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = 'Scroll active offers';
  private fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  async popBon( bonTip: string, bonPret: string ) {
      const alert = this.alertCtrl.create( {
        header: bonTip,
        message: bonPret,
        buttons: ['OK'] } );
      (await alert).present(); }

  ngOnInit() { }
}
