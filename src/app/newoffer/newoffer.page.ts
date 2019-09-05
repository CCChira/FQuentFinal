import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

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
  constructor(public authService: AuthService, private router: Router, private alertCtrl: AlertController, public navCtrl: NavController) { }

  public newoffer() {
    if (true /*decizie lipsa pentru verificarea unei oferte noi*/ ) {
      /*actiune lipsa pentru validarea unei oferte noi*/
      this.displayMarket(); }

      else {console.log('oferta incompleta');
        this.invalidOfferAlert(); } }

  async invalidOfferAlert() {
    const alert = this.alertCtrl.create({
      header: 'Offer Insert Failed',
      message: 'You need to enter a complete offer in order to insert it in the market.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

  public displayMarket() {
    this.router.navigateByUrl('market'); }

  addPicture(fileLoader) {
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

  imageLoaded(){
    this.processing = false; }

  removePic() {
    this.uploadImage = null; }

  ngOnInit() { }
 }
