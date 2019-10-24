import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { ActivityPage } from './activity.page';
var routes = [{
        path: '',
        component: ActivityPage
    }];
var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [],
            declarations: [ActivityPage]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());
export { ActivityPageModule };
//# sourceMappingURL=activity.module.js.map