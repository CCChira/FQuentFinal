import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AboutusPage = /** @class */ (function () {
    function AboutusPage(router) {
        this.router = router;
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'About Us';
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextshowCrt = true;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = true;
    }
    AboutusPage.prototype.ngOnInit = function () { };
    AboutusPage = tslib_1.__decorate([
        Component({
            selector: 'app-aboutus',
            templateUrl: './aboutus.page.html',
            styleUrls: ['./aboutus.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AboutusPage);
    return AboutusPage;
}());
export { AboutusPage };
//# sourceMappingURL=aboutus.page.js.map