import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
var Lostpass1Page = /** @class */ (function () {
    function Lostpass1Page(authService, router, alertCtrl) {
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.email = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Request Code';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
    }
    Lostpass1Page.prototype.validMail = function (mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail.match(mailformat);
    };
    Lostpass1Page.prototype.getcode = function () {
        if (this.email) {
            var ok = true;
            if (!this.validMail(this.email)) {
                ok = false;
                console.log('invalid email address');
                return this.invalidEmailAlert();
            }
            else {
                this.authService.sendMail(this.email);
                console.log('email sent');
                this.sentMailAlert();
                return this.displayLostpass2();
            }
        }
        else {
            console.log('no email');
            this.invalidEmailAlert();
        }
    };
    Lostpass1Page.prototype.invalidEmailAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Sending Code Failed!',
                            message: 'You need to enter a registred email in order to receive code.',
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
    Lostpass1Page.prototype.sentMailAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Mail sent!',
                            message: 'We sent a mail with a code to the indicated address.',
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
    Lostpass1Page.prototype.displayLostpass2 = function () { this.router.navigateByUrl('lostpass2'); };
    Lostpass1Page.prototype.ngOnInit = function () { };
    Lostpass1Page = tslib_1.__decorate([
        Component({
            selector: 'app-lostpass1',
            templateUrl: './lostpass1.page.html',
            styleUrls: ['./lostpass1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, AlertController])
    ], Lostpass1Page);
    return Lostpass1Page;
}());
export { Lostpass1Page };
//# sourceMappingURL=lostpass1.page.js.map