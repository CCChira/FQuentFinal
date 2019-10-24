import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { SharemapPage } from './sharemap.page';
var routes = [{
        path: '',
        component: SharemapPage
    }];
var SharemapPageModule = /** @class */ (function () {
    function SharemapPageModule() {
    }
    SharemapPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SharemapPage]
        })
    ], SharemapPageModule);
    return SharemapPageModule;
}());
export { SharemapPageModule };
//# sourceMappingURL=sharemap.module.js.map