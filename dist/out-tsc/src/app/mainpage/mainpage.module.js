import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { MainpagePage } from './mainpage.page';
var routes = [{
        path: '',
        component: MainpagePage
    }];
var MainpagePageModule = /** @class */ (function () {
    function MainpagePageModule() {
    }
    MainpagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [],
            declarations: [MainpagePage]
        })
    ], MainpagePageModule);
    return MainpagePageModule;
}());
export { MainpagePageModule };
//# sourceMappingURL=mainpage.module.js.map