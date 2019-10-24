import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { ProfilerPage } from './profiler.page';
var routes = [{
        path: '',
        component: ProfilerPage
    }];
var ProfilerPageModule = /** @class */ (function () {
    function ProfilerPageModule() {
    }
    ProfilerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfilerPage]
        })
    ], ProfilerPageModule);
    return ProfilerPageModule;
}());
export { ProfilerPageModule };
//# sourceMappingURL=profiler.module.js.map