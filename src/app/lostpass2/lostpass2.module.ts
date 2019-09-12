import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';

import { Lostpass2Page } from './lostpass2.page';

const routes: Routes=[ {
    path: '',
    component: Lostpass2Page } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolerModule,
    RouterModule.forChild(routes) ],
  declarations: [Lostpass2Page] } )

export class Lostpass2PageModule { }
