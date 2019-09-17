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
  private searchhelp;
  private searchfaq;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Help and FAQ';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = '';
  private fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public displayFound() {
    this.router.navigateByUrl('market'); }

  ngOnInit() { }
}
