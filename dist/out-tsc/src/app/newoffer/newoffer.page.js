import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfferService } from '../offer.service';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
var NewofferPage = /** @class */ (function () {
    function NewofferPage(modalCtrl, authService, router, alertCtrl, gLocation, offerService, userService, afAuth) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.gLocation = gLocation;
        this.offerService = offerService;
        this.userService = userService;
        this.afAuth = afAuth;
        this.processing = false;
        this.offerImg = null;
        this.type = '';
        this.title = '';
        this.category = '';
        this.description = '';
        this.reqprice = ''; ///
        this.proposedprice = ''; ///
        this.contactphone = '';
        this.warranty = false;
        this.email = '';
        this.cardSwitch = true;
    }
    NewofferPage.prototype.Mareste = function () { this.cardSwitch = !this.cardSwitch; };
    NewofferPage.prototype.resetCardSwitch = function () { this.cardSwitch = true; };
    NewofferPage.prototype.newOffer = function () {
        var _this = this;
        if (this.title && this.category && this.description && this.proposedprice && this.contactphone && this.type) {
            /*actiune lipsa pentru validarea unei oferte noi*/
            console.log('aici sunt');
            var latitude_1;
            var longitude_1;
            this.gLocation.getCurrentPosition().then(function (position) {
                latitude_1 = position.coords.latitude;
                longitude_1 = position.coords.longitude;
                if (_this.type.toLowerCase().indexOf('of') > -1) {
                    _this.offerService.setOffer({
                        type: 'Offer',
                        title: _this.title,
                        category: _this.category,
                        description: _this.description,
                        proposedprice: _this.proposedprice,
                        contactphone: _this.contactphone,
                        firstCoord: latitude_1,
                        email: _this.userService.getEmail(),
                        secondCoord: longitude_1
                    });
                }
                else {
                    _this.offerService.setOffer({
                        type: 'Request',
                        title: _this.title,
                        category: _this.category,
                        description: _this.description,
                        proposedprice: _this.proposedprice,
                        contactphone: _this.contactphone,
                        firstCoord: latitude_1,
                        email: _this.userService.getEmail(),
                        secondCoord: longitude_1
                    });
                }
            });
            this.dismissNewofferModal();
            this.validOfferAlert();
        }
        else {
            console.log('oferta incompleta');
            this.dismissNewofferModal();
            this.invalidOfferAlert();
        }
        ;
        this.resetCardSwitch();
    };
    NewofferPage.prototype.validOfferAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Offer Inserted!',
                            message: 'Your offer is now presented to the market.',
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
    NewofferPage.prototype.invalidOfferAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'Offer Insert Failed',
                            message: 'You need to enter all fields of the offer form in order to insert it in the market.',
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
    NewofferPage.prototype.addPicture = function (fileLoader) {
        fileLoader.click();
        var that = this;
        fileLoader.onchange = function () {
            var file = fileLoader.files[0];
            var reader = new FileReader();
            reader.addEventListener('load', function () {
                that.processing = true;
                that.offerImg = reader.result;
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        };
        this.resetCardSwitch();
    };
    NewofferPage.prototype.imageLoaded = function () {
        this.processing = false;
        this.resetCardSwitch();
    };
    NewofferPage.prototype.removePic = function () {
        this.offerImg = null;
        this.resetCardSwitch();
    };
    NewofferPage.prototype.dismissNewofferModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.resetCardSwitch();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewofferPage.prototype.ngOnInit = function () { };
    NewofferPage = tslib_1.__decorate([
        Component({
            selector: 'app-newoffer',
            templateUrl: './newoffer.page.html',
            styleUrls: ['./newoffer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AuthService, Router, AlertController,
            Geolocation, OfferService, UserService, AngularFireAuth])
    ], NewofferPage);
    return NewofferPage;
}());
export { NewofferPage };
//# sourceMappingURL=newoffer.page.js.map