import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
var ActivityPage = /** @class */ (function () {
    function ActivityPage(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.searchmyoff = '';
        this.searchmyreq = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'My Activity';
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = true;
        this.hideFAB = false;
    }
    ActivityPage.prototype.ShowHideFAB = function (miscare) {
        if (miscare === 'ascundeFAB')
            this.hideFAB = true;
        else if (miscare === 'arataFAB')
            this.hideFAB = false;
    };
    ActivityPage.prototype.displayOfrModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: NewofferPage })];
                    case 1:
                        ListModal = _a.sent();
                        return [4 /*yield*/, ListModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ActivityPage.prototype.displayReqModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: NewrequestPage })];
                    case 1:
                        ListModal = _a.sent();
                        return [4 /*yield*/, ListModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ActivityPage.prototype.ngOnInit = function () { };
    ActivityPage = tslib_1.__decorate([
        Component({
            selector: 'app-activity',
            templateUrl: './activity.page.html',
            styleUrls: ['./activity.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, Router])
    ], ActivityPage);
    return ActivityPage;
}());
export { ActivityPage };
//# sourceMappingURL=activity.page.js.map