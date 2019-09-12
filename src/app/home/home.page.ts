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
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) {}

  ngOnInit() { }
  paginacrt: string = 'Home Page';
}
