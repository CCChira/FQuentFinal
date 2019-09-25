import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component( {
  selector: 'app-profiler',
  templateUrl: './profiler.page.html',
  styleUrls: ['./profiler.page.scss'], } )

export class ProfilerPage implements OnInit {
  private processing: boolean;
  private uploadImage = null;
  private name;
  private phone;
  private email;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Edit Profile';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '';
  private fBarIcon2Hide: boolean = false;

  constructor(private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  private cardSwitch: boolean = true;
  private Mareste() {
    this.cardSwitch = !this.cardSwitch; }

  private resetCardSwitch() {
    this.cardSwitch = true; }

  private changedata() {
    // lipsa
    this.resetCardSwitch();
    this.displayMarket(); }

  private displayMarket() {
    this.router.navigateByUrl('market'); }

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
        reader.readAsDataURL(file); } };
    this.resetCardSwitch(); }

  private imageLoaded(){
    this.processing = false;
    this.resetCardSwitch(); }

  private removePic() {
    this.uploadImage = null;
    this.resetCardSwitch(); }

  ngOnInit() { }
}
