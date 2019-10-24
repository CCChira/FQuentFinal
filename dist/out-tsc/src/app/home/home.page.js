import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ArticolPage } from 'src/app/articol/articol.page';
import { DataService } from 'src/app/data.service';
var HomePage = /** @class */ (function () {
    function HomePage(dataService, modalCtrl, router) {
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.tBarHide = true;
        this.tBarIcon1Hide = true;
        this.tBarTextCrt = 'Welcome to Our App!';
        this.tBarIcon2Hide = true;
        this.fBarHide = true;
        this.fBarIcon1Hide = false;
        this.fBarTextCrt = '2019© by Flexiloquent™';
        this.fBarIcon2Hide = false;
        this.bazaDate = this.dataService.getBazaDate();
        this.bazaFiltrata = this.bazaDate;
        this.IndexA = [];
        this.maxIndex = 6;
        this.j = 0;
        this.k = 0;
        this.cont = 0;
        this.bazaSeparata = [];
    }
    HomePage.prototype.Indexare = function () {
        for (this.j = 0; this.j < this.maxIndex; this.j++)
            this.IndexA.push(0);
        for (var _i = 0, _a = this.bazaDate; _i < _a.length; _i++) {
            this.articol = _a[_i];
            this.cont = 0;
            for (this.j = 0; this.j < this.maxIndex && this.cont === 0; this.j++) {
                if (this.articol.id > this.IndexA[this.j]) {
                    for (this.k = this.maxIndex - 1; this.k > this.j; this.k--) {
                        this.IndexA[this.k] = this.IndexA[this.k - 1];
                    }
                    this.IndexA[this.j] = this.articol.id;
                    this.cont = 1;
                }
            }
        }
        this.Separare();
    };
    HomePage.prototype.Separare = function () {
        for (this.j = 0; this.j < this.maxIndex; this.j++) {
            for (var _i = 0, _a = this.bazaDate; _i < _a.length; _i++) {
                this.articol = _a[_i];
                if (this.articol.id === this.IndexA[this.j])
                    this.bazaSeparata.push(this.articol);
            }
        }
    };
    HomePage.prototype.displayArtModal = function (item) {
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
    HomePage.prototype.ngOnInit = function () {
        this.Indexare();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ModalController, Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map