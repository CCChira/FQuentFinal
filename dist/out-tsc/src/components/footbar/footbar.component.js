import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var FootbarComponent = /** @class */ (function () {
    function FootbarComponent(router) {
        this.router = router;
    }
    FootbarComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FootbarComponent.prototype, "fBarIcon1", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FootbarComponent.prototype, "fBarText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FootbarComponent.prototype, "fBarTextshow", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FootbarComponent.prototype, "fBarIcon2", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FootbarComponent.prototype, "fBarPhoto", void 0);
    FootbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-footbar',
            templateUrl: './footbar.component.html',
            styleUrls: ['./footbar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], FootbarComponent);
    return FootbarComponent;
}());
export { FootbarComponent };
//# sourceMappingURL=footbar.component.js.map