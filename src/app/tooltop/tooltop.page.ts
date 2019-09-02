import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component( {
  selector: 'app-tooltop',
  templateUrl: './tooltop.page.html',
  styleUrls: ['./tooltop.page.scss'], } )

export class TooltopPage implements OnInit {
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }
}
