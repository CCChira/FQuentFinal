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
// import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@NgModule({
  declarations: [ TopbarComponent, FootbarComponent, NewofferPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule ],
  entryComponents: [ NewofferPage],
  exports: [ TopbarComponent, FootbarComponent, NewofferPage] })

export class ToolerModule implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, public newofferPage: NewofferPage, public topbarComponent: TopbarComponent, public footbarComponent: FootbarComponent, public alertCtrl: AlertController) { }

  ngOnInit() {}
}
