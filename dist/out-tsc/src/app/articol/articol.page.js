import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core'; //  , HostListener
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
var ArticolPage = /** @class */ (function () {
    function ArticolPage(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        /*@HostListener('document:ionBackButton', ['$event'])
          private async overrideHardwareBackAction($event: any) {
              await this.modalCtrl.dismiss(); }*/
        this.cardSwitch = true;
    }
    ArticolPage.prototype.Mareste = function () { this.cardSwitch = !this.cardSwitch; };
    ArticolPage.prototype.dismissArticolModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.modalCtrl.dismiss()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    ArticolPage.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "genArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "titluArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ArticolPage.prototype, "srcimgArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "zonaArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "categorieArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "descriereArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "contactArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ArticolPage.prototype, "pretpeziArt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ArticolPage.prototype, "garantieArt", void 0);
    ArticolPage = tslib_1.__decorate([
        Component({
            selector: 'app-articol',
            templateUrl: './articol.page.html',
            styleUrls: ['./articol.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, Router])
    ], ArticolPage);
    return ArticolPage;
}());
export { ArticolPage };
//# sourceMappingURL=articol.page.js.map