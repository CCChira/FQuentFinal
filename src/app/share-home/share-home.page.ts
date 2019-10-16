import {Component, ElementRef, NgZone, ViewChild, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Router} from '@angular/router';
import { OfferService } from '../offer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NewofferPage } from '../newoffer/newoffer.page';
//import { NewrequestPage } from '../newrequest/newrequest.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


declare var google: any;
@Component({
  selector: 'app-share-home',
  templateUrl: './share-home.page.html',
  styleUrls: ['./share-home.page.scss'],
})

export class ShareHomePage implements OnInit{
  @ViewChild('Map') mapElement: ElementRef;
  offerDoc: any;
  // tslint:disable-next-line: member-ordering
  actualOfferDoc: any;
  offerLocation: any;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyATAikieaTwVAWqie7fxBF7jIMaJ-NxmAc';
  apiKey2: any = 'AIzaSyB18lelfnI0FmCS9XmOp7H5LV6f8iWc4iE'; /*Your API Key*/
  // tslint:disable-next-line: max-line-length
  ngOnInit() {
    this.offerService.readOffer().valueChanges().subscribe(res => {
      this.offerDoc = res;
      console.log(this.offerDoc);
    });
    return this.offerDoc;
  }
  // tslint:disable-next-line: max-line-length
  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public zone: NgZone, public geolocation: Geolocation, public router: Router, public offerService: OfferService, public afStore: AngularFirestore, public afAuth: AngularFireAuth) {
    // this.offerDoc = this.afStore.collection<JSON>('GlobalOffers');
    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    document.head.appendChild(script);
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: false
    };
    setTimeout(() => {
        console.log(this.offerDoc);
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
       /// const markers = this.getStorage();
       /// console.log(markers);
        // tslint:disable-next-line: prefer-const
        for (const iterator of this.offerDoc) {
            this.location.lat = iterator.firstCoord;
            this.location.lng = iterator.secondCoord;
            // const position = {lat, lang};
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'My Location';
            this.marker = new google.maps.Marker(this.markerOptions);
            let infowindow = new google.maps.InfoWindow({
              content: ' '
            });
            // tslint:disable-next-line: only-arrow-functions
            google.maps.event.addListener(this.marker, 'click', function() {
              // tslint:disable-next-line: max-line-length
              infowindow.setContent('<div>' + '<p>Type: ' + iterator.type + '</p>' +
                '<p>Proposed item: ' + iterator.title + '</p>' +
                '<p>Category: ' + iterator.category + '</p>' +
                '<p>Description: ' + iterator.description + '</p>' +
                '<p>Requested Price: ' + iterator.proposedprice + '</p>' +
                '<p>Contact Phone: ' + iterator.contactphone + '</p>' +
                '<button onclick = "myFunction()">Accept Announcement</button>' );
              infowindow.open(this.map, this);
            });
            google.maps.event.trigger(this.marker, 'click');
            
          }

    }, 5000);
  }
  displayProfile() {
    this.router.navigateByUrl('profiler');
  }
  displayHelper() {
    this.router.navigateByUrl('helper');
  }
  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component:  NewofferPage });
    return await ListModal.present(); }
  async acceptedAnnouncementAlert() {
      const alert = this.alertCtrl.create({
        header: 'You have accepted this announcement!',
        message: 'Please wait to be contacted by the poster or call them yourself with the phone number they provided',
        buttons: ['Go back to map'] } );
      (await alert).present(); }
}
