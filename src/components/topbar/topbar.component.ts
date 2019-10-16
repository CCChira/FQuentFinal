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
    public tBarIcon1: boolean;
  @Input()
    public tBarText: any;
  @Input()
    public tBarSearch: any;
  @Input()
    public tBarIcon2: boolean;

  public searchinbar;
  public name = 'Alessia Bidian';
  public email = 'alessia.bidian@yahoo.com';
  public password;
  public phone = '0723 147 497';
  constructor(public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  ngOnInit() {}
}
