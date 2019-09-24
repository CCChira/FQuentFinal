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
  private password;
  private confirmpass;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Edit Profile';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '';
  private fBarIcon2Hide: boolean = false;

  constructor(private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  private changedata() {
    // lipsa
    this.displayMarket() }

  private validPassword(pass) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{7,20}$/;
    return pass.match(passwordFormat); }

  private changepass() {
    if (this.password) {
      if (this.validPassword(this.password) && this.password === this.confirmpass) {
        /* lipsa actiune pentru salvarea parolei noi*/
        console.log('good match')
        this.validPassAlert();
        return this.displayMarket(); }
      else if (this.validPassword(this.password)) {
        console.log('different passwords');
        return this.invalidPassAlert(); }
        else {
          console.log('bad password');
          return this.invalidPassAlert(); } }
    else {
      console.log('no password');
      this.invalidPassAlert(); }
  }

  async validPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'The password was changed!',
      message: 'You are logged now with the new password.',
      buttons: ['OK'] });
    (await alert).present(); }

  async invalidPassAlert() {
    const alert = this.alertCtrl.create({
      header: 'Password change failed!',
      message: 'Passwords must include at least 8 alphanumeric characters (lowercase, uppercase letters and numbers) and they have to be identical.',
      buttons: ['TRY AGAIN'] });
    (await alert).present(); }

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
        reader.readAsDataURL(file); } } }

  private imageLoaded(){
    this.processing = false; }

  private removePic() {
    this.uploadImage = null; }

  ngOnInit() { }
}
