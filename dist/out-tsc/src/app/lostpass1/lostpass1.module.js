import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { Lostpass1Page } from './lostpass1.page';
var routes = [{
        path: '',
        component: Lostpass1Page
    }];
var Lostpass1PageModule = /** @class */ (function () {
    function Lostpass1PageModule() {
    }
    Lostpass1PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Lostpass1Page]
        })
    ], Lostpass1PageModule);
    return Lostpass1PageModule;
}());
export { Lostpass1PageModule };
//# sourceMappingURL=lostpass1.module.js.map