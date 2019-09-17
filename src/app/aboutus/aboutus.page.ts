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
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'About Us';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
}
