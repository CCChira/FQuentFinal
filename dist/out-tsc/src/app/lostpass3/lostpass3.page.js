import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
var Lostpass3Page = /** @class */ (function () {
    function Lostpass3Page(afAuth, authService, router, alertCtrl) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.password = '';
        this.confirmpass = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Change Password';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
    }
    Lostpass3Page.prototype.validPassword = function (pass) {
        var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
        return pass.match(passwordFormat);
    };
    Lostpass3Page.prototype.changepass = function () {
        if (this.password) {
            if (this.validPassword(this.password) && this.password === this.confirmpass) {
                /* lipsa actiune pentru salvarea parolei noi si logarea imediata*/
                console.log('good match');
                this.validPassAlert();
                return this.displayMarket();
            }
            else if (this.validPassword(this.password)) {
                console.log('different passwords');
                return this.invalidPassAlert();
            }
            else {
                console.log('bad password');
                return this.invalidPassAlert();
            }
        }
        else {
            console.log('no password');
            this.invalidPassAlert();
        }
    };
    Lostpass3Page.prototype.validPassAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'The password was changed!',
                            message: 'You are logged now with the new password.',
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
    Lostpass3Page.prototype.invalidPassAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Password change failed!',
                            message: 'Passwords have to be identical, at least 8 digits long with at least 7 letters and numbers, have both lowercase and uppercase and include at least one special character.',
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
    Lostpass3Page.prototype.displayMarket = function () { this.router.navigateByUrl('sharemap'); };
    Lostpass3Page.prototype.ngOnInit = function () { };
    Lostpass3Page = tslib_1.__decorate([
        Component({
            selector: 'app-lostpass3',
            templateUrl: './lostpass3.page.html',
            styleUrls: ['./lostpass3.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, AuthService, Router, AlertController])
    ], Lostpass3Page);
    return Lostpass3Page;
}());
export { Lostpass3Page };
//# sourceMappingURL=lostpass3.page.js.map