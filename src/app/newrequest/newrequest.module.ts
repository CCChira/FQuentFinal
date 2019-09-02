import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewrequestPage } from './newrequest.page';

const routes: Routes=[ {
    path: '',
    component: NewrequestPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  declarations: [NewrequestPage] } )

export class NewrequestPageModule {}
