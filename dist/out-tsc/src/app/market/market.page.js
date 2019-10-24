import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';
import { DataService } from 'src/app/data.service';
var MarketPage = /** @class */ (function () {
    function MarketPage(dataService, modalCtrl, router) {
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.tBarHide = false;
        this.tBarIcon1Hide = false;
        this.tBarTextCrt = "Tool's Market";
        this.tBarSearchShow = true; // This page has 1 extra switch, for Search
        this.tBarIcon2Hide = false;
        this.fBarHide = false;
        this.fBarIcon1Hide = true;
        this.fBarTextCrt = 'Hurry up! Deals are hunted.';
        this.fBarIcon2Hide = true;
        this.hideFAB = false;
        this.bazaDate = this.dataService.getBazaDate();
        this.bazaFiltrata = this.bazaDate;
        this.serchInit = '';
        this.sGen = '';
        this.sArea = '';
        this.sCategory = '';
        this.sDescription = '';
        this.sMaxprice = 1000;
        this.refinedHide = true;
    }
    MarketPage.prototype.ShowHideFAB = function (miscare) {
        if (miscare === 'ascundeFAB')
            this.hideFAB = true;
        else if (miscare === 'arataFAB')
            this.hideFAB = false;
    };
    MarketPage.prototype.ShowRefined = function () {
        this.tBarSearchShow = !this.tBarSearchShow;
        this.refinedHide = !this.refinedHide;
        this.sGen = '';
        this.sArea = '';
        this.sCategory = '';
        this.sDescription = '';
        this.sMaxprice = 1000;
        this.bazaFiltrata = this.bazaDate;
    };
    MarketPage.prototype.Cautare = function (termen) {
        this.bazaFiltrata = this.bazaDate.filter(function (oriceart) {
            return ((oriceart.pretpezi <= parseInt(termen, 10)) || oriceart.gen.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
                (oriceart.zona.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.categorie.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
                (oriceart.descriere.toLowerCase().indexOf(termen.toLowerCase()) > -1);
        });
    };
    MarketPage.prototype.Rafinare = function () {
        var _this = this;
        this.bazaFiltrata = this.bazaDate.filter(function (item) {
            return (item.gen.toLowerCase().indexOf(_this.sGen.toLowerCase()) > -1) && (item.zona.toLowerCase().indexOf(_this.sArea.toLowerCase()) > -1) &&
                (item.categorie.toLowerCase().indexOf(_this.sCategory.toLowerCase()) > -1) &&
                (item.descriere.toLowerCase().indexOf(_this.sDescription.toLowerCase()) > -1) && (item.pretpezi <= _this.sMaxprice);
        });
    };
    MarketPage.prototype.displayOfrModal = function () {
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
    MarketPage.prototype.displayReqModal = function () {
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
    MarketPage.prototype.displayArtModal = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ListModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ArticolPage,
                            componentProps: {
                                genArt: item.gen,
                                titluArt: item.titlu,
                                srcimgArt: item.srcimg,
                                zonaArt: item.zona,
                                categorieArt: item.categorie,
                                descriereArt: item.descriere,
                                contactArt: item.contact,
                                pretpeziArt: item.pretpezi,
                                garantieArt: item.garantie
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
    MarketPage.prototype.ngOnInit = function () { };
    MarketPage = tslib_1.__decorate([
        Component({
            selector: 'app-market',
            templateUrl: './market.page.html',
            styleUrls: ['./market.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ModalController, Router])
    ], MarketPage);
    return MarketPage;
}());
export { MarketPage };
//# sourceMappingURL=market.page.js.map