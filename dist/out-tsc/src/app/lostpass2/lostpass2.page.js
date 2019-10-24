import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
var Lostpass2Page = /** @class */ (function () {
    function Lostpass2Page(authService, afAuth, router, alertCtrl) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.digit1 = '';
        this.digit2 = '';
        this.digit3 = '';
        this.digit4 = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Insert Code';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
    }
    Lostpass2Page.prototype.newpass = function () {
        if (this.digit1 === "1" && this.digit2 === "2" && this.digit3 === "3" && this.digit4 === "4" /* lipsa decizie verificare cod*/) {
            /* lipsa actiune dupa verificare cod*/
            console.log('valid code');
            this.validCodeAlert();
            return this.displayLospass3();
        }
        else {
            console.log('incorrect code');
            this.invalidCodeAlert();
        }
    };
    Lostpass2Page.prototype.validCodeAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'The code was good!',
                            message: 'You can now change your password.',
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
    Lostpass2Page.prototype.invalidCodeAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Code Verifying Failed!',
                            message: 'You need to enter a valid code in order to change password.',
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
    Lostpass2Page.prototype.displayLospass3 = function () { this.router.navigateByUrl('lostpass3'); };
    Lostpass2Page.prototype.ngOnInit = function () { };
    Lostpass2Page = tslib_1.__decorate([
        Component({
            selector: 'app-lostpass2',
            templateUrl: './lostpass2.page.html',
            styleUrls: ['./lostpass2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, AngularFireAuth, Router, AlertController])
    ], Lostpass2Page);
    return Lostpass2Page;
}());
export { Lostpass2Page };
//# sourceMappingURL=lostpass2.page.js.map