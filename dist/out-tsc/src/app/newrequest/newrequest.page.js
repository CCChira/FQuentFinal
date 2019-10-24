import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
var NewrequestPage = /** @class */ (function () {
    function NewrequestPage(modalCtrl, router, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.title = '';
        this.category = '';
        this.description = '';
        this.reqprice = '';
        this.contactphone = '';
    }
    NewrequestPage.prototype.newRequest = function () {
        if (true /*decizie lipsa pentru verificarea unei cereri noi*/) {
            /*actiune lipsa pentru validarea unei cereri noi*/
            console.log('cerere inserata');
            this.dismissNewrequestModal();
            this.validRequestAlert();
        }
        else {
            console.log('cerere incompleta');
            this.dismissNewrequestModal();
            this.invalidRequestAlert();
        }
    };
    NewrequestPage.prototype.validRequestAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Request Inserted!',
                            message: 'Your request is now presented to the market.',
                            buttons: ['OK']
                        });
                        return [4 /*yield*/, alert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewrequestPage.prototype.invalidRequestAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Request Insert Failed',
                            message: 'You need to enter a complete request in order to insert it in the market.',
                            buttons: ['TRY AGAIN']
                        });
                        return [4 /*yield*/, alert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewrequestPage.prototype.dismissNewrequestModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.modalCtrl.dismiss()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    NewrequestPage.prototype.ngOnInit = function () { };
    NewrequestPage = tslib_1.__decorate([
        Component({
            selector: 'app-newrequest',
            templateUrl: './newrequest.page.html',
            styleUrls: ['./newrequest.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, Router, AlertController])
    ], NewrequestPage);
    return NewrequestPage;
}());
export { NewrequestPage };
//# sourceMappingURL=newrequest.page.js.map