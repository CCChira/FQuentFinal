import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HelperPage = /** @class */ (function () {
    function HelperPage(router) {
        this.router = router;
        this.searchhelp = '';
        this.searchfaq = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Help and FAQ';
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextshowCrt = true;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = true;
    }
    HelperPage.prototype.ngOnInit = function () { };
    HelperPage = tslib_1.__decorate([
        Component({
            selector: 'app-helper',
            templateUrl: './helper.page.html',
            styleUrls: ['./helper.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HelperPage);
    return HelperPage;
}());
export { HelperPage };
//# sourceMappingURL=helper.page.js.map