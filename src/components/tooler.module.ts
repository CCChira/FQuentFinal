import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { TopbarComponent } from 'src/components/topbar/topbar.component';
import { FootbarComponent } from 'src/components/footbar/footbar.component';

@NgModule({
  declarations: [ TopbarComponent, FootbarComponent ],
  imports: [
    CommonModule,
    IonicModule ],
  exports: [ TopbarComponent, FootbarComponent ] })

export class ToolerModule implements OnInit {
  constructor(private router: Router, public topbarComponent: TopbarComponent, public footbarComponent: FootbarComponent, private alertCtrl: AlertController) { }

  ngOnInit() {}
}
