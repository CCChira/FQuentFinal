import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolerModule } from 'src/components/tooler.module';
import { MarketPage } from './market.page';
var routes = [{
        path: '',
        component: MarketPage
    }];
var MarketPageModule = /** @class */ (function () {
    function MarketPageModule() {
    }
    MarketPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ToolerModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [],
            declarations: [MarketPage]
        })
    ], MarketPageModule);
    return MarketPageModule;
}());
export { MarketPageModule };
//# sourceMappingURL=market.module.js.map