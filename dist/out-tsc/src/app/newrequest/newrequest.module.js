import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewrequestPage } from './newrequest.page';
var routes = [{
        path: '',
        component: NewrequestPage
    }];
var NewrequestPageModule = /** @class */ (function () {
    function NewrequestPageModule() {
    }
    NewrequestPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [NewrequestPage],
            declarations: []
        })
    ], NewrequestPageModule);
    return NewrequestPageModule;
}());
export { NewrequestPageModule };
//# sourceMappingURL=newrequest.module.js.map