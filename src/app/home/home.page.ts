import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], })

export class HomePage {
  public tBarHide: boolean = true;
  public tBarIcon1Hide: boolean = true;
  public tBarTextCrt = 'Welcome to Our App!';
  public tBarIcon2Hide: boolean = true;
  public fBarHide: boolean = true;
  public fBarIcon1Hide: boolean = false;
  public fBarTextCrt = '2019© by Flexiloquent™';
  public fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) {}

  ngOnInit() { }
}
