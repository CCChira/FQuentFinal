import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { TooltopPage } from './tooltop.page';
var routes = [{
        path: '',
        component: TooltopPage
    }];
var TooltopPageModule = /** @class */ (function () {
    function TooltopPageModule() {
    }
    TooltopPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TooltopPage]
        })
    ], TooltopPageModule);
    return TooltopPageModule;
}());
export { TooltopPageModule };
//# sourceMappingURL=tooltop.module.js.map