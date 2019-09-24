import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'lostpass1', loadChildren: './lostpass1/lostpass1.module#Lostpass1PageModule' },
  { path: 'lostpass2', loadChildren: './lostpass2/lostpass2.module#Lostpass2PageModule' },
  { path: 'lostpass3', loadChildren: './lostpass3/lostpass3.module#Lostpass3PageModule' },
  { path: 'market', loadChildren: './market/market.module#MarketPageModule' },
  { path: 'tooltop', loadChildren: './tooltop/tooltop.module#TooltopPageModule' },
  { path: 'mainpage', loadChildren: './mainpage/mainpage.module#MainpagePageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule' },
  { path: 'helper', loadChildren: './helper/helper.module#HelperPageModule' },
  { path: 'profiler', loadChildren: './profiler/profiler.module#ProfilerPageModule' },
  ];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } ) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
