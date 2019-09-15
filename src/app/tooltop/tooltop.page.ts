import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-tooltop',
  templateUrl: './tooltop.page.html',
  styleUrls: ['./tooltop.page.scss'], } )

export class TooltopPage implements OnInit {
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Tools by Type';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = 'Swipe categories';
  private fBarIcon2Hide: boolean = true;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
}
