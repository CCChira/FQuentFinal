import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticolPage } from './articol.page';

const routes: Routes=[ {
    path: '',
    component: ArticolPage } ];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) ],
  entryComponents: [ ArticolPage ],
  declarations: [ ] } )

export class ArticolPageModule {}
