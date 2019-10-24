import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TopbarComponent } from 'src/components/topbar/topbar.component';
import { FootbarComponent } from 'src/components/footbar/footbar.component';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';
var ToolerModule = /** @class */ (function () {
    function ToolerModule(router, newofferPage, newrequestPage, articolPage, topbarComponent, footbarComponent, alertCtrl) {
        this.router = router;
        this.newofferPage = newofferPage;
        this.newrequestPage = newrequestPage;
        this.topbarComponent = topbarComponent;
        this.footbarComponent = footbarComponent;
        this.alertCtrl = alertCtrl;
    }
    ToolerModule.prototype.ngOnInit = function () { };
    ToolerModule = tslib_1.__decorate([
        NgModule({
            declarations: [TopbarComponent, FootbarComponent, NewofferPage, NewrequestPage, ArticolPage],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule
            ],
            entryComponents: [NewofferPage, NewrequestPage, ArticolPage],
            exports: [TopbarComponent, FootbarComponent, NewofferPage, NewrequestPage, ArticolPage]
        }),
        tslib_1.__metadata("design:paramtypes", [Router, NewofferPage, NewrequestPage,
            ArticolPage, TopbarComponent,
            FootbarComponent, AlertController])
    ], ToolerModule);
    return ToolerModule;
}());
export { ToolerModule };
//# sourceMappingURL=tooler.module.js.map