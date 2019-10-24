import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
var UserService = /** @class */ (function () {
    function UserService(afStore, afAuth) {
        this.afStore = afStore;
        this.afAuth = afAuth;
    }
    UserService.prototype.setUser = function (user) { this.user = user; }; // this.afStore.collection('Users').add(user);
    UserService.prototype.setEmail = function (mail) { this.user.email = mail; };
    UserService.prototype.setUID = function (UID) { this.user.uid = UID; };
    UserService.prototype.getEmail = function () { return this.user.email; };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map