import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewofferPage } from './newoffer.page';
var routes = [{
        path: '',
        component: NewofferPage
    }];
var NewofferPageModule = /** @class */ (function () {
    function NewofferPageModule() {
    }
    NewofferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [NewofferPage],
            declarations: []
        })
    ], NewofferPageModule);
    return NewofferPageModule;
}());
export { NewofferPageModule };
//# sourceMappingURL=newoffer.module.js.map