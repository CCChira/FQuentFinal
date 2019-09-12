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
  private keyword;
  private category;
  private description;
  private maxprice;
  private searcharea;
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

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
    (await alert).present(); }

  public displayFound() {
    this.router.navigateByUrl('market'/*found page instead*/ ); }

  ngOnInit() { }
  paginacrt: string = 'Search Page';
}
