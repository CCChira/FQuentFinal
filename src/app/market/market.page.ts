import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component( {
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'], } )

export class MarketPage implements OnInit {
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
}
