import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'], })

export class MainpagePage implements OnInit {
  private keyword;
  private category;
  private description;
  private maxprice;
  private searcharea;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Main Page';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = 'Zoom in and out for details';
  private fBarIcon2Hide: boolean = true;

  constructor(private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
}
