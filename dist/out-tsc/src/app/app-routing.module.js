import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'sharemap', loadChildren: './sharemap/sharemap.module#SharemapPageModule' },
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
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map