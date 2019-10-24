import { Injectable, Directive } from '@angular/core';  // , OnInit - bagat in plus OnInit
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { query } from '@angular/core/src/render3';
import { markParentViewsForCheck } from '@angular/core/src/view/util';

interface Offer {
    type: any;
    title: any;
    category: any;
    description: any;
    proposedprice: any;
    contactphone: any;
    email: any;
    firstCoord: any;
    secondCoord: any; }

@Injectable()
export class OfferService {
  public offer: Offer;
  public bazaDateServer = [];

  constructor(public afStore: AngularFirestore) {}

  setTitle( Title ) { this.offer.title = Title; }
  setCategory( Category ) { this.offer.category = Category; }
  setDescription( Description ) { this.offer.description = Description; }
  setReqprice( ReqPrice ) { this.offer.proposedprice = ReqPrice; }
  setContactPhone( ContactPhone ) { this.offer.contactphone = ContactPhone; }
  setLat( Lat ) { this.offer.firstCoord = Lat; }
  setLng( Lng ) { this.offer.firstCoord = Lng; }
  setOffer( offer: Offer ) {
    this.offer = offer;
    this.afStore.collection('GlobalOffers').add( offer );
    console.log('oferta noua'); } // this.offer.contactphone = ContactPhone;

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

  readOffer(): AngularFirestoreCollection<Offer> { return this.afStore.collection('GlobalOffers'); }

  setCoordinates( coord1, coord2 ) { this.offer.firstCoord = coord1; this.offer.secondCoord = coord2; }
  getPrice() { return this.offer.proposedprice; }
  getTitle() { return this.offer.title; }
  getPhone() { return this.offer.contactphone; }
  getLatitude() { return this.offer.firstCoord; }
  getLongitude() { return this.offer.secondCoord; }

  public getBazaDate() {
   return this.bazaDateServer; }
}
