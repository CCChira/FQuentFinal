import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { Lostpass3Page } from './lostpass3.page';
var routes = [{
        path: '',
        component: Lostpass3Page
    }];
var Lostpass3PageModule = /** @class */ (function () {
    function Lostpass3PageModule() {
    }
    Lostpass3PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Lostpass3Page]
        })
    ], Lostpass3PageModule);
    return Lostpass3PageModule;
}());
export { Lostpass3PageModule };
//# sourceMappingURL=lostpass3.module.js.map