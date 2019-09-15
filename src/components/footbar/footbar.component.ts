import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss'], } )

export class FootbarComponent implements OnInit {
  @Input()
    private fBarIcon1: boolean;
  @Input()
    private fBarText: any;
  @Input()
    private fBarIcon2: boolean;

  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}
}
