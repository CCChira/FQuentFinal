import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.topbarModif = new EventEmitter();
        this.menuModif = new EventEmitter();
        this.searchTermBar = '';
        this.name = 'Catalina Dumitru';
        this.email = 'catalina.dumitru@yahoo.com';
        this.phone = '0723 456 789';
    }
    TopbarComponent.prototype.Trimite = function () { this.topbarModif.emit(this.searchTermBar); };
    TopbarComponent.prototype.AscundeFAB = function () { this.menuModif.emit('ascundeFAB'); };
    TopbarComponent.prototype.ArataFAB = function () { this.menuModif.emit('arataFAB'); };
    TopbarComponent.prototype.Reseteaza = function () { this.searchTermBar = ''; };
    /*  openMenu() {
         this.menuCtrl.open();
       console.log('menu'); } */
    TopbarComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TopbarComponent.prototype, "tBarIcon1", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TopbarComponent.prototype, "tBarText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TopbarComponent.prototype, "tBarSearch", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TopbarComponent.prototype, "tBarIcon2", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TopbarComponent.prototype, "topbarModif", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TopbarComponent.prototype, "menuModif", void 0);
    TopbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, MenuController])
    ], TopbarComponent);
    return TopbarComponent;
}());
export { TopbarComponent };
// <ion-icon src="\assets\icon\user.svg" alt="FlexLogo" slot="start"> </ion-icon>
//# sourceMappingURL=topbar.component.js.map