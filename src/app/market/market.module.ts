import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';

import { MarketPage } from './market.page';

const routes: Routes= [ {
    path: '',
    component: MarketPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolerModule,
    RouterModule.forChild(routes) ],
  entryComponents: [NewofferPage],
  declarations: [MarketPage] } )

export class MarketPageModule {}
