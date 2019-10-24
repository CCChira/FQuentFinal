import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(router) {
        this.router = router;
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Settings';
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = true;
    }
    SettingsPage.prototype.Temare1 = function () {
        this.curThem1 = localStorage.getItem('tema1saved'); // eventual de luat din Firestore
        if (this.curThem1 != 'modif')
            this.curThem1 = 'orig';
        document.documentElement.setAttribute('tema1', this.curThem1);
        this.toggSwitch1 = (this.curThem1 === 'modif');
    };
    SettingsPage.prototype.switchThem1 = function () {
        if (this.toggSwitch1 === true)
            this.curThem1 = 'orig';
        else
            this.curThem1 = 'modif';
        this.toggSwitch1 = !this.toggSwitch1;
        document.documentElement.setAttribute('tema1', this.curThem1);
        localStorage.setItem('tema1saved', this.curThem1);
    }; // eventual de salvat pe Firestore
    SettingsPage.prototype.Temare2 = function () {
        this.curThem2 = localStorage.getItem('tema2saved'); // eventual de luat din Firestore
        if (this.curThem2 != 'modif')
            this.curThem2 = 'orig';
        document.documentElement.setAttribute('tema2', this.curThem2);
        this.toggSwitch2 = (this.curThem2 === 'modif');
    };
    SettingsPage.prototype.switchThem2 = function () {
        if (this.toggSwitch2 === true)
            this.curThem2 = 'orig';
        else
            this.curThem2 = 'modif';
        this.toggSwitch2 = !this.toggSwitch2;
        document.documentElement.setAttribute('tema2', this.curThem2);
        localStorage.setItem('tema2saved', this.curThem2);
    }; // eventual de salvat pe Firestore
    SettingsPage.prototype.Temare3 = function () {
        this.curThem3 = localStorage.getItem('tema3saved'); // eventual de luat din Firestore
        if (this.curThem3 != 'modif')
            this.curThem3 = 'orig';
        document.documentElement.setAttribute('tema3', this.curThem3);
        this.toggSwitch3 = (this.curThem3 === 'modif');
    };
    SettingsPage.prototype.switchThem3 = function () {
        if (this.toggSwitch3 === true)
            this.curThem3 = 'orig';
        else
            this.curThem3 = 'modif';
        this.toggSwitch3 = !this.toggSwitch3;
        document.documentElement.setAttribute('tema3', this.curThem3);
        localStorage.setItem('tema3saved', this.curThem3);
    }; // eventual de salvat pe Firestore
    SettingsPage.prototype.Temare4 = function () {
        this.curThem4 = localStorage.getItem('tema4saved'); // eventual de luat din Firestore
        if (this.curThem4 != 'modif')
            this.curThem4 = 'orig';
        document.documentElement.setAttribute('tema4', this.curThem4);
        this.toggSwitch4 = (this.curThem4 === 'modif');
    };
    SettingsPage.prototype.switchThem4 = function () {
        if (this.toggSwitch4 === true)
            this.curThem4 = 'orig';
        else
            this.curThem4 = 'modif';
        this.toggSwitch4 = !this.toggSwitch4;
        document.documentElement.setAttribute('tema4', this.curThem4);
        localStorage.setItem('tema4saved', this.curThem4);
    }; // eventual de salvat pe Firestore
    SettingsPage.prototype.Temare5 = function () {
        this.curThem5 = localStorage.getItem('tema5saved'); // eventual de luat din Firestore
        if (this.curThem5 != 'modif')
            this.curThem5 = 'orig';
        document.documentElement.setAttribute('tema5', this.curThem5);
        this.toggSwitch5 = (this.curThem5 === 'modif');
    };
    SettingsPage.prototype.switchThem5 = function () {
        if (this.toggSwitch5 === true)
            this.curThem5 = 'orig';
        else
            this.curThem5 = 'modif';
        this.toggSwitch5 = !this.toggSwitch5;
        document.documentElement.setAttribute('tema5', this.curThem5);
        localStorage.setItem('tema5saved', this.curThem5);
    }; // eventual de salvat pe Firestore
    SettingsPage.prototype.ngOnInit = function () {
        this.Temare1();
        this.Temare2();
        this.Temare3();
        this.Temare4();
        this.Temare5();
    };
    SettingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map