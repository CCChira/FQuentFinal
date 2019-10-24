import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticolPage } from './articol.page';
var routes = [{
        path: '',
        component: ArticolPage
    }];
var ArticolPageModule = /** @class */ (function () {
    function ArticolPageModule() {
    }
    ArticolPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [ArticolPage],
            declarations: []
        })
    ], ArticolPageModule);
    return ArticolPageModule;
}());
export { ArticolPageModule };
//# sourceMappingURL=articol.module.js.map