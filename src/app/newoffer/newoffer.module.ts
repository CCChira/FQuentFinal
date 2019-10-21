import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewofferPage } from './newoffer.page';

const routes: Routes=[ {
    path: '',
    component: NewofferPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  entryComponents: [ NewofferPage ],
  declarations: [ ] } )

export class NewofferPageModule { }
