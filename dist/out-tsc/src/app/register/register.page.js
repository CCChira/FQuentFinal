import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, afAuth, router, alertCtrl, userService, afStore) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afStore = afStore;
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmpass = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Register Page';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
    }
    RegisterPage.prototype.validMail = function (mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail.match(mailformat);
    };
    RegisterPage.prototype.validPassword = function (pass) {
        var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
        return pass.match(passwordFormat);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.email && this.password) {
            var mail_1 = this.email;
            var name_1 = this.name;
            if (this.validPassword(this.password) && this.validMail(this.email) && this.password === this.confirmpass) {
                this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (response) {
                    console.log('user created');
                    _this.afAuth.auth.signInWithEmailAndPassword(_this.email, _this.password).then(function (res2) {
                        _this.afStore.collection('Users').add({ name: name_1, mail: mail_1 });
                        _this.userService.setUser({ email: _this.email, uid: response.user.uid });
                        console.log('user signed');
                        _this.loggedInAlert();
                        return _this.displayMarket();
                    });
                });
            }
            else if (this.validMail(this.email)) {
                console.log('passwords problem');
                return this.invalidPassAlert();
            }
            else {
                console.log('mail incorect sau lipsa');
                return this.invalidEmailAlert();
            }
        }
        else {
            console.log('mail lipsa');
            return this.invalidEmailAlert();
        }
    };
    RegisterPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.loginFacebook().then(function (response) {
            console.log(response);
            _this.loggedInAlert();
            return _this.displayMarket();
        }, function (error) {
            _this.externlogAlert();
            console.log('invalid FB credentials');
            console.log(error);
        });
    };
    RegisterPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.authService.loginGoogle().then(function (response) {
            console.log(response);
            _this.loggedInAlert();
            return _this.displayMarket();
        }, function (error) {
            _this.externlogAlert();
            console.log('invalid G+ Credentials');
            console.log(error);
        });
    };
    RegisterPage.prototype.loggedInAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Success!',
                            message: 'Your user was created and you are now logged in.',
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
    RegisterPage.prototype.externlogAlert = function () {
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
    RegisterPage.prototype.invalidPassAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Registration failed!',
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
    RegisterPage.prototype.invalidEmailAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Registration failed!',
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
    RegisterPage.prototype.displayMarket = function () { this.router.navigateByUrl('sharemap'); };
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, AngularFireAuth, Router, AlertController,
            UserService, AngularFirestore])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map