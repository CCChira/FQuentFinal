import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';

import { ProfilerPage } from './profiler.page';

const routes: Routes=[ {
    path: '',
    component: ProfilerPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolerModule,
    RouterModule.forChild(routes) ],
  declarations: [ProfilerPage] } )

export class ProfilerPageModule {}
