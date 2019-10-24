import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfferService } from '../offer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component( {
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'], } )

export class NewofferPage implements OnInit {
  private processing: boolean = false;
  private offerImg = null;
  public type: string = '';
  private title: string = '';
  private category: string = '';
  private description: string = '';
  private reqprice: string = '';  ///
  public proposedprice: string = '';  ///
  private contactphone: string = '';
  private warranty: boolean = false;
  public email: string = '';

  constructor(private modalCtrl: ModalController, public authService: AuthService, private router: Router, private alertCtrl: AlertController,
    public gLocation: Geolocation, public offerService: OfferService, public userService: UserService, public afAuth: AngularFireAuth) { }

  private cardSwitch: boolean = true;
  private Mareste() { this.cardSwitch = !this.cardSwitch; }

  private resetCardSwitch() { this.cardSwitch = true; }

  private newOffer() {
    if (this.title && this.category && this.description && this.proposedprice && this.contactphone &&  this.type ) {
      /*actiune lipsa pentru validarea unei oferte noi*/
      console.log('aici sunt');
      let latitude;
      let longitude;
      this.gLocation.getCurrentPosition().then( (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          if(this.type.toLowerCase().indexOf('of') > -1){
            this.offerService.setOffer({
              type: 'Offer',
              title: this.title,
              category: this.category,
              description: this.description,
              proposedprice: this.proposedprice,
              contactphone: this.contactphone,
              firstCoord: latitude,
              email: this.userService.getEmail(),
              secondCoord: longitude });
          }
          else {
            this.offerService.setOffer({
              type: 'Request',
              title: this.title,
              category: this.category,
              description: this.description,
              proposedprice: this.proposedprice,
              contactphone: this.contactphone,
              firstCoord: latitude,
              email: this.userService.getEmail(),
              secondCoord: longitude });
          }  } );
      this.dismissNewofferModal();
      this.validOfferAlert(); }

      else {
        console.log('oferta incompleta');
        this.dismissNewofferModal();
        this.invalidOfferAlert(); };
      this.resetCardSwitch(); }

  async validOfferAlert() {
    const alert = this.alertCtrl.create({
      header: 'Offer Inserted!',
      message: 'Your offer is now presented to the market.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidOfferAlert() {
    const alert = this.alertCtrl.create({
      header: 'Offer Insert Failed',
      message: 'You need to enter all fields of the offer form in order to insert it in the market.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  private addPicture(fileLoader) {
    fileLoader.click();
    var that = this;
    fileLoader.onchange = function () {
      var file = fileLoader.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        that.processing = true;
        that.offerImg = reader.result; }, false);
      if (file) { reader.readAsDataURL(file); } };
    this.resetCardSwitch(); }

  private imageLoaded(){
    this.processing = false;
    this.resetCardSwitch(); }

  private removePic() {
    this.offerImg = null;
    this.resetCardSwitch(); }

  async dismissNewofferModal() {
    await this.modalCtrl.dismiss();
    this.resetCardSwitch(); }

  ngOnInit() { }
 }
