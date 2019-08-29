import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lostpass3Page } from './lostpass3.page';

const routes: Routes=[ {
    path: '',
    component: Lostpass3Page } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  declarations: [Lostpass3Page] } )

export class Lostpass3PageModule {}
