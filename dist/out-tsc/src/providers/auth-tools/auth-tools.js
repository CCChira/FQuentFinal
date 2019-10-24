import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/data.service';
// import { GooglePlus, GooglePlusOriginal } from '@ionic-native/google-plus';
var AuthService = /** @class */ (function () {
    function AuthService(dataService, afAuth) {
        this.dataService = dataService;
        this.afAuth = afAuth;
        this.state = {};
        this.isCorrect = {};
        this.bazaIDloco = [];
        this.bazaIDloco = this.dataService.getBazaID();
        this.isCorrect = 0;
    }
    AuthService.prototype.login = function (email, pass) { return this.afAuth.auth.signInWithEmailAndPassword(email, pass); };
    AuthService.prototype.loginGoogle = function () { return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); };
    AuthService.prototype.loginFacebook = function () { return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()); };
    AuthService.prototype.loginStatus = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (state) {
            _this.state = state;
        });
    };
    AuthService.prototype.getUser = function () { };
    AuthService.prototype.sendMail = function (mail) { };
    // lipsa procedura de trimis mail de recuperare
    AuthService.prototype.logOut = function () {
        /*   this.googleplus.logout().then( () => {
              this.afAuth.auth.signOut();
            },
           () => {
                  this.afAuth.auth.signOut();
            }); */
    };
    // lipsa procedura de delogare
    AuthService.prototype.ngOnInit = function () { };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DataService, AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth-tools.js.map