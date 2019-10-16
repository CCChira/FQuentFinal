import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
//import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'], })

export class MainpagePage implements OnInit {
  public keyword;
  public category;
  public description;
  public maxprice;
  public searcharea;
  public tBarHide: boolean = false;
  public tBarIcon1Hide: boolean = false;
  public tBarTextCrt = 'Main Page';
  public tBarSearchShow: boolean = true; // This page has 1 extra switch, for Search
  public tBarIcon2Hide: boolean = false;
  public fBarHide: boolean = false;
  public fBarIcon1Hide: boolean = true;
  public fBarTextCrt = 'Add Offers or Requests!';
  public fBarIcon2Hide: boolean = true;

  constructor(public modalCtrl: ModalController, public afAuth: AngularFireAuth, public authService: AuthService, public router: Router, public alertCtrl: AlertController) { }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewofferPage });
    return await ListModal.present(); }

  ngOnInit() { }
}
