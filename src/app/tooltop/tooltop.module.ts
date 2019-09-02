import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooltopPage } from './tooltop.page';

const routes: Routes=[ {
    path: '',
    component: TooltopPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  declarations: [TooltopPage] } )

export class TooltopPageModule {}
