import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
var ProfilerPage = /** @class */ (function () {
    function ProfilerPage(afAuth, authService, router, alertCtrl) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.profileImg = null;
        this.name = '';
        this.phone = '';
        this.email = '';
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = 'Update your informations:';
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = true;
        this.cardSwitch = true;
    }
    ProfilerPage.prototype.Mareste = function () { this.cardSwitch = !this.cardSwitch; };
    ProfilerPage.prototype.resetCardSwitch = function () { this.cardSwitch = true; };
    ProfilerPage.prototype.changedata = function () {
        // lipsa procedura de pushare date noi de profil
        this.resetCardSwitch();
        this.displayMarket();
    };
    ProfilerPage.prototype.displayMarket = function () { this.router.navigateByUrl('sharemap'); };
    ProfilerPage.prototype.addPicture = function (fileLoader) {
        fileLoader.click();
        var that = this;
        fileLoader.onchange = function () {
            var file = fileLoader.files[0];
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                that.processing = true;
                that.profileImg = reader.result;
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        };
        this.resetCardSwitch();
    };
    ProfilerPage.prototype.imageLoaded = function () {
        this.processing = false;
        this.resetCardSwitch();
    };
    ProfilerPage.prototype.removePic = function () {
        this.profileImg = null;
        this.resetCardSwitch();
    };
    ProfilerPage.prototype.ngOnInit = function () { };
    ProfilerPage = tslib_1.__decorate([
        Component({
            selector: 'app-profiler',
            templateUrl: './profiler.page.html',
            styleUrls: ['./profiler.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, AuthService, Router, AlertController])
    ], ProfilerPage);
    return ProfilerPage;
}());
export { ProfilerPage };
//# sourceMappingURL=profiler.page.js.map