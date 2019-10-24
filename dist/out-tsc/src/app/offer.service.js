import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core'; // , OnInit - bagat in plus OnInit
import { AngularFirestore } from '@angular/fire/firestore';
var OfferService = /** @class */ (function () {
    function OfferService(afStore) {
        this.afStore = afStore;
        this.bazaDateServer = [];
    }
    OfferService.prototype.setTitle = function (Title) { this.offer.title = Title; };
    OfferService.prototype.setCategory = function (Category) { this.offer.category = Category; };
    OfferService.prototype.setDescription = function (Description) { this.offer.description = Description; };
    OfferService.prototype.setReqprice = function (ReqPrice) { this.offer.proposedprice = ReqPrice; };
    OfferService.prototype.setContactPhone = function (ContactPhone) { this.offer.contactphone = ContactPhone; };
    OfferService.prototype.setLat = function (Lat) { this.offer.firstCoord = Lat; };
    OfferService.prototype.setLng = function (Lng) { this.offer.firstCoord = Lng; };
    OfferService.prototype.setOffer = function (offer) {
        this.offer = offer;
        this.afStore.collection('GlobalOffers').add(offer);
        console.log('oferta noua');
    }; // this.offer.contactphone = ContactPhone;
    /*  async getMarker() {
        let markers = [];
        const snapshot = await this.afStore.collection('GlobalOffers').get().subscribe(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            return doc.data(); } ); } ); } */
    /*async getDbTitle() {
      const snp = await this.afStore.collection('GlobalOffers').snapshotChanges( res=>{
        res.docs.forEach(doc => {
          return doc.data();  });
          }); }*/
    OfferService.prototype.readOffer = function () { return this.afStore.collection('GlobalOffers'); };
    OfferService.prototype.setCoordinates = function (coord1, coord2) { this.offer.firstCoord = coord1; this.offer.secondCoord = coord2; };
    OfferService.prototype.getPrice = function () { return this.offer.proposedprice; };
    OfferService.prototype.getTitle = function () { return this.offer.title; };
    OfferService.prototype.getPhone = function () { return this.offer.contactphone; };
    OfferService.prototype.getLatitude = function () { return this.offer.firstCoord; };
    OfferService.prototype.getLongitude = function () { return this.offer.secondCoord; };
    OfferService.prototype.getBazaDate = function () {
        return this.bazaDateServer;
    };
    OfferService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], OfferService);
    return OfferService;
}());
export { OfferService };
//# sourceMappingURL=offer.service.js.map