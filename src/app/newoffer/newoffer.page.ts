import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'], } )

export class NewofferPage implements OnInit {
  private processing: boolean;
  private uploadImage = null;
  private title;
  private category;
  private description;
  private reqprice;
  private contactphone;

  constructor(private modalCtrl: ModalController, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  public newoffer() {
    if (true /*decizie lipsa pentru verificarea unei oferte noi*/ ) {
      /*actiune lipsa pentru validarea unei oferte noi*/
      this.dismissNewofferModal();
      this.validOfferAlert(); }

      else {console.log('oferta incompleta');
        this.invalidOfferAlert(); } }

  async validOfferAlert() {
    const alert = this.alertCtrl.create({
      header: 'Offer Inserted!',
      message: 'Your offer is now presented to the market.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidOfferAlert() {
    const alert = this.alertCtrl.create({
      header: 'Offer Insert Failed',
      message: 'You need to enter a complete offer in order to insert it in the market.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  private addPicture(fileLoader) {
    fileLoader.click();
    var that = this;
    fileLoader.onchange = function () {
      var file = fileLoader.files[0];
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        that.processing = true;
        that.uploadImage = reader.result; }, false);

      if (file) {
        reader.readAsDataURL(file); } } }

  private imageLoaded(){
    this.processing = false; }

  private removePic() {
    this.uploadImage = null; }

  async dismissNewofferModal() { await this.modalCtrl.dismiss() }

  ngOnInit() { }
 }
