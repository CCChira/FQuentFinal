import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TopbarComponent } from 'src/components/topbar/topbar.component';
import { FootbarComponent } from 'src/components/footbar/footbar.component';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@NgModule({
  declarations: [ TopbarComponent, FootbarComponent, NewofferPage, NewrequestPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule ],
  entryComponents: [ NewofferPage, NewrequestPage ],
  exports: [ TopbarComponent, FootbarComponent, NewofferPage, NewrequestPage ] })

export class ToolerModule implements OnInit {
  constructor(private router: Router, public newofferPage: NewofferPage, public newrequestPage: NewrequestPage, public topbarComponent: TopbarComponent, public footbarComponent: FootbarComponent, private alertCtrl: AlertController) { }

  ngOnInit() {}
}
