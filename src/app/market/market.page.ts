import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'], } )

export class MarketPage implements OnInit {
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
  paginacrt: string = "Tool's Market";
}
