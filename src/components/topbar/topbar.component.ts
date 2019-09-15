import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'], } )

export class TopbarComponent implements OnInit {
  @Input()
    private tBarIcon1: boolean;
  @Input()
    private tBarText: any;
  @Input()
    private tBarIcon2: boolean;

  private name = 'Alessia Bidian';
  private email = 'alessia.bidian@yahoo.com';
  private password;
  private phone = '0723 147 497';
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}
}
