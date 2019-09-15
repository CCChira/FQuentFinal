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
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = true;
  private tBarTextCrt = 'Welcome to Our App!';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) {}

  ngOnInit() { }
}
