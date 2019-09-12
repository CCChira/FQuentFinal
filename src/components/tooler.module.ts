import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { TopbarComponent } from 'src/components/topbar/topbar.component';

@NgModule({
  declarations: [ TopbarComponent ],
  imports: [
    CommonModule,
    IonicModule ],
  exports: [ TopbarComponent ] })

export class ToolerModule implements OnInit {
  constructor(private router: Router, public topbarComponent: TopbarComponent, private alertCtrl: AlertController) { }

  ngOnInit() {}
}
