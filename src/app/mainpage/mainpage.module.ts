import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';

import { MainpagePage } from './mainpage.page';

const routes: Routes = [{
    path: '',
    component: MainpagePage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolerModule,
    RouterModule.forChild(routes) ],
  entryComponents: [ ],
  declarations: [MainpagePage] })

export class MainpagePageModule {}
