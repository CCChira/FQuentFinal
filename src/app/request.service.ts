import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { query } from '@angular/core/src/render3';
import { markParentViewsForCheck } from '@angular/core/src/view/util';

interface Request {
    type: any;
    title: any;
    category: any;
    description: any;
    reqprice: any;
    contactphone: any;
    firstCoord: any;
    email: any;
    secondCoord: any; }

@Injectable()
export class OfferService {
  public request: Request;

  constructor(public afStore: AngularFirestore) {}

  setTitle( Title ) { this.request.title = Title; }
  setCategory( Category ) { this.request.category = Category; }
  setDescription( Description ) { this.request.description = Description; }
  setReqprice( ReqPrice ) { this.request.reqprice = ReqPrice; }
  setContactPhone( ContactPhone ) { this.request.contactphone = ContactPhone; }
  setLat( Lat ) { this.request.firstCoord = Lat; }
  setLng( Lng ) { this.request.firstCoord = Lng; }
  setCoordinates( coord1, coord2 ) { this.request.firstCoord = coord1; this.request.secondCoord = coord2; }

  setOffer( request: Request ) { this.request = request; this.afStore.collection('GlobalOffers').add(request); }
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

  readOffer(): AngularFirestoreCollection<Request> { return this.afStore.collection('GlobalOffers'); }

  getPrice() { return this.request.reqprice; }
  getTitle() { return this.request.title; }
  getPhone() { return this.request.contactphone; }
  getLatitude() { return this.request.firstCoord; }
  getLongitude() { return this.request.secondCoord; }
}
