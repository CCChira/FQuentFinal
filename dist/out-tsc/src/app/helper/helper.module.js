import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { HelperPage } from './helper.page';
var routes = [{
        path: '',
        component: HelperPage
    }];
var HelperPageModule = /** @class */ (function () {
    function HelperPageModule() {
    }
    HelperPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HelperPage]
        })
    ], HelperPageModule);
    return HelperPageModule;
}());
export { HelperPageModule };
//# sourceMappingURL=helper.module.js.map