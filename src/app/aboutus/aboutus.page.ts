import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'], } )

export class AboutusPage implements OnInit {
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'About Us';
  public tBarIcon2Hide: boolean = true;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = '2019© by Flexiloquent™';
  public fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  ngOnInit() { }
}
