import * as tslib_1 from "tslib";
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from '../newoffer/newoffer.page';
import { NewrequestPage } from '../newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfferService } from '../offer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
var SharemapPage = /** @class */ (function () {
    function SharemapPage(alertCtrl, modalCtrl, zone, geolocation, router, offerService, afStore, afAuth) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.geolocation = geolocation;
        this.router = router;
        this.offerService = offerService;
        this.afStore = afStore;
        this.afAuth = afAuth;
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = "Tool's Map";
        this.tBarSearchShow = false;
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextCrt = 'Zoom In and Out to find deals!';
        this.fBarIcon2Hide = true;
        this.hideFAB = false;
        this.offerDoc = [];
        this.location = { lat: null, lng: null };
        this.markerOptions = { position: null, map: null, title: null };
        this.apiKey = 'AIzaSyATAikieaTwVAWqie7fxBF7jIMaJ-NxmAc';
        this.apiKey2 = 'AIzaSyB18lelfnI0FmCS9XmOp7H5LV6f8iWc4iE';
        this.pinImageOfr = '/assets/PinMarkerOfr.svg';
        this.pinImagePrs = '/assets/PinMarkerPrs.svg';
        this.pinImageReq = '/assets/PinMarkerReq.svg';
        this.mapGen = 'satellite';
    }
    SharemapPage.prototype.ShowHideFAB = function (miscare) {
        if (miscare === 'ascundeFAB')
            this.hideFAB = true;
        else if (miscare === 'arataFAB')
            this.hideFAB = false;
    };
    SharemapPage.prototype.Initializare = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.location.lat = position.coords.latitude;
            _this.location.lng = position.coords.longitude;
        });
        this.mapOptions = { center: this.location, zoom: 12, mapTypeControl: false, mapTypeId: this.mapGen };
        setTimeout(function () {
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
            _this.markerOptions.position = _this.location; // const position = {lat, lang};
            _this.markerOptions.map = _this.map;
            _this.markerOptions.title = 'My position';
            _this.markerOptions.icon = _this.pinImagePrs;
            _this.marker = new google.maps.Marker(_this.markerOptions);
            var infowindow = new google.maps.InfoWindow({ content: 'This is my position!', maxWidth: 110 });
            _this.marker.addListener('click', function () { infowindow.open(this.map, this); }, false);
            _this.marker.addListener('mouseover', function () { infowindow.close(this.map, this); }, false);
            _this.Marcare();
        }, 4000);
    }; // delay pentru incarcare harta
    SharemapPage.prototype.Marcare = function () {
        console.log(this.offerDoc.length); /// Verificare existenta Oferta Globala
        var _loop_1 = function (item) {
            this_1.location.lat = item.firstCoord;
            this_1.location.lng = item.secondCoord;
            this_1.markerOptions.position = this_1.location; // const position = {lat, lang};
            this_1.markerOptions.map = this_1.map;
            this_1.markerOptions.title = item.category;
            if (item.type.toLowerCase().indexOf('of') > -1)
                this_1.markerOptions.icon = this_1.pinImageOfr;
            else
                this_1.markerOptions.icon = this_1.pinImageReq;
            this_1.marker = new google.maps.Marker(this_1.markerOptions);
            var infowindow = new google.maps.InfoWindow({ content: item.type + ' ' + item.category, maxWidth: 110 });
            this_1.marker.addListener('click', function () { infowindow.open(this.map, this); }, false);
            this_1.marker.addListener('mouseover', function () { infowindow.close(this.map, this); }, false);
            this_1.marker.addListener('dblclick', this_1.displayArtModal.bind(this_1, item), false);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.offerDoc; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    SharemapPage.prototype.ChangeMapGen = function () {
        if (this.mapGen === 'satellite') {
            this.map.setMapTypeId('roadmap');
            this.mapGen = 'roadmap';
        }
        else {
            this.map.setMapTypeId('satellite');
            this.mapGen = 'satellite';
        }
    };
    SharemapPage.prototype.displayOfrModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: NewofferPage })];
                    case 1:
                        ListModal = _a.sent();
                        return [4 /*yield*/, ListModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SharemapPage.prototype.displayReqModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: NewrequestPage })];
                    case 1:
                        ListModal = _a.sent();
                        return [4 /*yield*/, ListModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SharemapPage.prototype.displayArtModal = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ArticolPage,
                            componentProps: {
                                genArt: item.type,
                                titluArt: item.title,
                                srcimgArt: '/assets/samples/Portavoce.jpg',
                                zonaArt: 'Cluj',
                                categorieArt: item.category,
                                contactArt: item.contactphone,
                                descriereArt: item.description,
                                pretpeziArt: item.proposedprice,
                                garantieArt: false
                            },
                        })];
                    case 1:
                        ListModal = _a.sent();
                        return [4 /*yield*/, ListModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SharemapPage.prototype.acceptedAnnouncementAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertCtrl.create({
                            header: 'You have accepted this announcement!',
                            message: 'Please wait to be contacted by the poster or call him with the provided phone number',
                            buttons: ['Go back to map']
                        });
                        return [4 /*yield*/, alert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharemapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.offerService.readOffer().valueChanges().subscribe(function (response) {
            _this.offerDoc = response;
        });
        //    this.offerDoc = this.offerService.bazaDateServer;
        this.Initializare();
    };
    tslib_1.__decorate([
        ViewChild('Map'),
        tslib_1.__metadata("design:type", ElementRef)
    ], SharemapPage.prototype, "mapElement", void 0);
    SharemapPage = tslib_1.__decorate([
        Component({
            selector: 'app-sharemap',
            templateUrl: './sharemap.page.html',
            styleUrls: ['./sharemap.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, ModalController, NgZone, Geolocation,
            Router, OfferService, AngularFirestore, AngularFireAuth])
    ], SharemapPage);
    return SharemapPage;
}());
export { SharemapPage };
//# sourceMappingURL=sharemap.page.js.map