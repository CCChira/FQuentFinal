import { Component, OnInit } from '@angular/core';
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
  public processing: boolean;
  public uploadImage = null;
  public type: string;
  public title;
  public category;
  public description;
  public proposedprice;
  public warranty;
  public contactphone;
  public email;
  // tslint:disable-next-line: max-line-length
  constructor(public modalCtrl: ModalController, public authService: AuthService, public router: Router, public alertCtrl: AlertController, public gLocation: Geolocation, public offerService: OfferService, public userService: UserService, public afAuth: AngularFireAuth) { }

  public newoffer() {
    if (this.title && this.category && this.description && this.proposedprice && this.contactphone &&  this.type) {
      /*actiune lipsa pentru validarea unei oferte noi*/
      console.log('aici');
      let latitude;
      let longitude;
      this.gLocation.getCurrentPosition().then((position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          if(this.type === 'offer'){
            this.offerService.setOffer({
              type: 'offer',
              title: this.title,
              category: this.category,
              description: this.description,
              proposedprice: this.proposedprice,
              contactphone: this.contactphone,
              firstCoord: latitude,
              email: this.userService.getEmail(),
              secondCoord: longitude
            });
          }
          if(this.type === 'request'){
            this.offerService.setOffer({
              type: 'request',
              title: this.title,
              category: this.category,
              description: this.description,
              proposedprice: this.proposedprice,
              contactphone: this.contactphone,
              firstCoord: latitude,
              email: this.userService.getEmail(),
              secondCoord: longitude
            });
          }
       });
      console.log(this.offerService);
      //this.displayMarket();
      this.dismissNewofferModal();
    } else {this.invalidOfferAlert(); }
  }
  async  validOfferAlert() {
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
  public displayMarket() {
    this.router.navigateByUrl('market');
  }
  async dismissNewofferModal() { await this.modalCtrl.dismiss(); }
/*
      // tslint:disable-next-line: align
  /*addPicture(fileLoader) {
    fileLoader.click();
    const that = this;
    fileLoader.onchange = function() {
      const file = fileLoader.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        that.processing = true;
        that.uploadImage = reader.result; }, false);

      if (file) {
        reader.readAsDataURL(file); } }; }

  imageLoaded() {
  public imageLoaded(){
    this.processing = false; }

  public removePic() {
    this.uploadImage = null; }
*/
ngOnInit() {
}
}
