import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';

@Component( {
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'], } )

export class ActivityPage implements OnInit {
  private searchmyoff: string = '';
  private searchmyreq: string = '';
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'My Activity';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt: string = '';
  private fBarIcon2Hide: boolean = true;
  private hideFAB: boolean = false;

  private ShowHideFAB( miscare ){
    if (miscare === 'ascundeFAB') this.hideFAB = true;
    else if (miscare === 'arataFAB') this.hideFAB = false; }

  constructor(private modalCtrl: ModalController, private router: Router) { }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component: NewrequestPage });
    return await ListModal.present(); }

  ngOnInit() { }
}
