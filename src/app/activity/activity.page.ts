import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'], } )

export class ActivityPage implements OnInit {
  public searchmyoff;
  public searchmyreq;
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'My Activity';
  public tBarIcon2Hide: boolean = false;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = '';
  public fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  ngOnInit() { }
}
