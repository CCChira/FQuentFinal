import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { Lostpass2Page } from './lostpass2.page';
var routes = [{
        path: '',
        component: Lostpass2Page
    }];
var Lostpass2PageModule = /** @class */ (function () {
    function Lostpass2PageModule() {
    }
    Lostpass2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Lostpass2Page]
        })
    ], Lostpass2PageModule);
    return Lostpass2PageModule;
}());
export { Lostpass2PageModule };
//# sourceMappingURL=lostpass2.module.js.map