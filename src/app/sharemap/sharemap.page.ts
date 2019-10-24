import { Component, ElementRef, NgZone, ViewChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from '../newoffer/newoffer.page';
import { NewrequestPage } from '../newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';

import { Injectable, Directive } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfferService } from '../offer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-sharemap',
  templateUrl: './sharemap.page.html',
  styleUrls: ['./sharemap.page.scss'], })

export class SharemapPage implements OnInit {

  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = "Tool's Map";
  private tBarSearchShow: boolean = false;
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt: string = 'Zoom In and Out to find deals!';
  private fBarIcon2Hide: boolean = true;
  private hideFAB: boolean = false;

  private ShowHideFAB( miscare ) {
    if (miscare === 'ascundeFAB') this.hideFAB = true;
    else if (miscare === 'arataFAB') this.hideFAB = false; }

  @ViewChild('Map') mapElement: ElementRef;
  offerDoc = [];
  actualOfferDoc: any;
  offerLocation: any;
  map: any;
  mapOptions: any;
  location = { lat: null, lng: null };
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;
  apiKey: any = 'AIzaSyATAikieaTwVAWqie7fxBF7jIMaJ-NxmAc';
  apiKey2: any = 'AIzaSyB18lelfnI0FmCS9XmOp7H5LV6f8iWc4iE';
  private pinImageOfr = '/assets/PinMarkerOfr.svg';
  private pinImagePrs = '/assets/PinMarkerPrs.svg';
  private pinImageReq = '/assets/PinMarkerReq.svg';
  private mapGen = 'satellite';

  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public zone: NgZone, public geolocation: Geolocation,
    public router: Router, public offerService: OfferService, public afStore: AngularFirestore, public afAuth: AngularFireAuth) { }

  public Initializare() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude; } );
    this.mapOptions = { center: this.location, zoom: 12, mapTypeControl: false, mapTypeId: this.mapGen };

    setTimeout(() => {  // Initializare harta
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      this.markerOptions.position = this.location; // const position = {lat, lang};
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'My position';
      this.markerOptions.icon = this.pinImagePrs;
      this.marker = new google.maps.Marker(this.markerOptions);
      let infowindow = new google.maps.InfoWindow( {content: 'This is my position!', maxWidth: 110} );
      this.marker.addListener('click', function() { infowindow.open(this.map, this); }, false);
      this.marker.addListener('mouseover', function() { infowindow.close(this.map, this); }, false);
      this.Marcare(); }, 4000); }  // delay pentru incarcare harta

  public Marcare() {  // Plasare marcatori
    console.log(this.offerDoc.length); /// Verificare existenta Oferta Globala
    for (const item of this.offerDoc) {
      this.location.lat = item.firstCoord;
      this.location.lng = item.secondCoord;

      this.markerOptions.position = this.location; // const position = {lat, lang};
      this.markerOptions.map = this.map;
      this.markerOptions.title = item.category;

      if ( item.type.toLowerCase().indexOf('of') > -1)
        this.markerOptions.icon = this.pinImageOfr;
      else this.markerOptions.icon = this.pinImageReq;

      this.marker = new google.maps.Marker(this.markerOptions);
      let infowindow = new google.maps.InfoWindow( {content: item.type +' '+ item.category, maxWidth: 110} );
      this.marker.addListener('click', function() { infowindow.open(this.map, this); }, false);
      this.marker.addListener('mouseover', function() { infowindow.close(this.map, this); }, false);
      this.marker.addListener('dblclick', this.displayArtModal.bind(this, item ), false )   }  }

  public ChangeMapGen() {
    if ( this.mapGen === 'satellite' ) {
      this.map.setMapTypeId('roadmap');
      this.mapGen = 'roadmap'; }
    else {
      this.map.setMapTypeId('satellite');
      this.mapGen = 'satellite'; } }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component:  NewrequestPage });
    return await ListModal.present(); }

  public async displayArtModal( item ): Promise <void> {
    const ListModal = await this.modalCtrl.create({
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
      garantieArt: false },  });
    return await ListModal.present(); }

  async acceptedAnnouncementAlert() {
    const alert = this.alertCtrl.create({
      header: 'You have accepted this announcement!',
      message: 'Please wait to be contacted by the poster or call him with the provided phone number',
      buttons: ['Go back to map'] } );
    (await alert).present(); }

  ngOnInit() {
    this.offerService.readOffer().valueChanges().subscribe(response => {
      this.offerDoc = response; } );
//    this.offerDoc = this.offerService.bazaDateServer;
    this.Initializare();
   }
}
