import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { AboutusPage } from './aboutus.page';
var routes = [{
        path: '',
        component: AboutusPage
    }];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AboutusPage]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());
export { AboutusPageModule };
//# sourceMappingURL=aboutus.module.js.map