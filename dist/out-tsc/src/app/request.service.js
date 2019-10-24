import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var OfferService = /** @class */ (function () {
    function OfferService(afStore) {
        this.afStore = afStore;
    }
    OfferService.prototype.setTitle = function (Title) { this.request.title = Title; };
    OfferService.prototype.setCategory = function (Category) { this.request.category = Category; };
    OfferService.prototype.setDescription = function (Description) { this.request.description = Description; };
    OfferService.prototype.setReqprice = function (ReqPrice) { this.request.reqprice = ReqPrice; };
    OfferService.prototype.setContactPhone = function (ContactPhone) { this.request.contactphone = ContactPhone; };
    OfferService.prototype.setLat = function (Lat) { this.request.firstCoord = Lat; };
    OfferService.prototype.setLng = function (Lng) { this.request.firstCoord = Lng; };
    OfferService.prototype.setCoordinates = function (coord1, coord2) { this.request.firstCoord = coord1; this.request.secondCoord = coord2; };
    OfferService.prototype.setOffer = function (request) { this.request = request; this.afStore.collection('GlobalOffers').add(request); };
    //  this.request.contactphone = ContactPhone;
    /*async getMarker() {
      let markers = [];
      const snapshot = await this.afStore.collection('GlobalOffers').get().subscribe(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          return doc.data(); } );  } ); } */
    /*async getDbTitle() {
    const snp = await this.afStore.collection('GlobalOffers').snapshotChanges( res=>{
      res.docs.forEach(doc => {
        return doc.data(); } );
    }); }*/
    OfferService.prototype.readOffer = function () { return this.afStore.collection('GlobalOffers'); };
    OfferService.prototype.getPrice = function () { return this.request.reqprice; };
    OfferService.prototype.getTitle = function () { return this.request.title; };
    OfferService.prototype.getPhone = function () { return this.request.contactphone; };
    OfferService.prototype.getLatitude = function () { return this.request.firstCoord; };
    OfferService.prototype.getLongitude = function () { return this.request.secondCoord; };
    OfferService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], OfferService);
    return OfferService;
}());
export { OfferService };
//# sourceMappingURL=request.service.js.map