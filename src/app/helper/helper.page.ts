import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-helper',
  templateUrl: './helper.page.html',
  styleUrls: ['./helper.page.scss'], } )

export class HelperPage implements OnInit {
  public searchhelp;
  public searchfaq;
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'Help and FAQ';
  public tBarIcon2Hide: boolean = false;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = '';
  public fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  public displayFound() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
