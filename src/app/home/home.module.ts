import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';

import { HomePage } from './home.page';

const routes: Routes=[ {
    path: '',
    component: HomePage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolerModule,
    RouterModule.forChild(routes) ],
  declarations: [HomePage] } )

export class HomePageModule {}
