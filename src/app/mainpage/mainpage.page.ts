import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'], })

export class MainpagePage implements OnInit {
  private keyword;
  private category;
  private description;
  private maxprice;
  private searcharea;
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = 'Main Page';
  private tBarSearchShow: boolean = true; // This page has 1 extra switch, for Search
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = 'Add Offers or Requests!';
  private fBarIcon2Hide: boolean = true;

  constructor(private modalCtrl: ModalController, private afAuth: AngularFireAuth, public authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewrequestPage });
    return await ListModal.present(); }

  ngOnInit() { }
}
