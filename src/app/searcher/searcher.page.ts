import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-searcher',
  templateUrl: './searcher.page.html',
  styleUrls: ['./searcher.page.scss'], } )

export class SearcherPage implements OnInit {
  public searchall;
  public skeyword;
  public scategory;
  public sdescription;
  public smaxprice;
  public sarea;
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'Search Page';
  public tBarIcon2Hide: boolean = false;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = 'Hurry up! Best deals are hunted.';
  public fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  public searchsome() {
    if (true /*decizie lipsa pentru cautare*/ ) {
      /*actiune lipsa pentru cautare*/
      this.displayFound(); }

      else {console.log('cautare incompleta');
        this.invalidSearchAlert(); } }

  async invalidSearchAlert() {
    const alert = this.alertCtrl.create({
      header: 'Search Failed',
      message: 'You need to enter other criteria.',
      buttons: ['TRY AGAIN'] });
    (await alert).present();
  }

  public displayFound() {
    this.router.navigateByUrl('market'/*found page instead*/ ); }

  ngOnInit() { }
}
