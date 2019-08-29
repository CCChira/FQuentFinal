import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lostpass1Page } from './lostpass1.page';

const routes: Routes=[ {
    path: '',
    component: Lostpass1Page } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  declarations: [Lostpass1Page] } )

export class Lostpass1PageModule {}
