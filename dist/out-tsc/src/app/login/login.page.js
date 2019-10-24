import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { UserService } from '../user.service';
import { Platform } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(plt, authService, afAuth, router, alertCtrl, userService) {
        this.plt = plt;
        this.authService = authService;
        this.afAuth = afAuth;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.name = ''; //
        this.email = '';
        this.uid = ''; //
        this.password = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Login Page';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
    }
    LoginPage.prototype.validMail = function (mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail.match(mailformat);
    };
    LoginPage.prototype.logmein = function () {
        var _this = this;
        if (this.email && this.password) {
            //    const mail = this.email;
            var ok = true;
            if (!this.validMail(this.email)) {
                ok = false;
                console.log('invalid email address');
                return this.invalidEmailAlert();
            }
            else
                this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (response) {
                    console.log('logged in with local ID');
                    console.log(response);
                    _this.loggedInAlert();
                    _this.userService.setUser({
                        //        name: this.name,   //
                        email: _this.email,
                        uid: response.user.uid
                        //        password: this.password   //
                    });
                    return _this.displayMarket();
                }, function (error) {
                    console.log('invalid credentials');
                    console.log(error);
                    return _this.invalidEmailOrPassAlert();
                });
        }
        else {
            console.log('missing email or password');
            this.invalidEmailOrPassAlert();
        }
    };
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.loginFacebook().then(function (response) {
            console.log('logged in with FB');
            console.log(response);
            _this.loggedInAlert();
            return _this.displayMarket();
        }, function (error) {
            _this.externlogAlert();
            console.log('invalid FB credentials');
            console.log(error);
        });
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.authService.loginGoogle().then(function (response) {
            console.log('logged in with G+');
            console.log(response);
            _this.loggedInAlert();
            return _this.displayMarket();
        }, function (error) {
            _this.externlogAlert();
            console.log('invalid G+ Credentials');
            console.log(error);
        });
    };
    LoginPage.prototype.invalidEmailOrPassAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Login Failed!',
                            message: 'You need to enter a valid email and password in order to log in.',
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
    LoginPage.prototype.invalidEmailAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Login failed!',
                            message: 'Please enter a valid email.',
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
    LoginPage.prototype.loggedInAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Success!',
                            message: 'You are now logged in.',
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
    LoginPage.prototype.externlogAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Service Unavailable!',
                            message: 'Something went wrong.',
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
    LoginPage.prototype.displayMarket = function () { this.router.navigateByUrl('sharemap'); };
    // private user: any;   //
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform, AuthService, AngularFireAuth, Router,
            AlertController, UserService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map