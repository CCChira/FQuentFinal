import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';

import { Injectable, Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'], })

export class MainpagePage implements OnInit {

  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt = "Tool's Map";
  private tBarSearchShow: boolean = true; // This page has 1 extra switch, for Search
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt = 'Add Offers or Requests!';
  private fBarIcon2Hide: boolean = true;

  private bazaDate = [ ];

  constructor(private dataService: DataService, private modalCtrl: ModalController, private router: Router) {
    this.bazaDate = this.dataService.getBazaDate(); }

  private bazaFiltrata = [];

  private serchInit: string = '';
  private sGen: string = '';
  private sArea: string = '';
  private sCategory: string = '';
  private sDescription: string = '';
  private sMaxprice: number = 1000;
  private refinedHide: boolean = true;
  private resultHide: boolean = true;

  private ShowRefined() {
    this.tBarSearchShow = !this.tBarSearchShow;
    this.refinedHide = !this.refinedHide;
    this.resultHide = true;
    this.sGen = '';
    this.sArea = '';
    this.sCategory = '';
    this.sDescription = '';
    this.sMaxprice = 1000;
    this.bazaFiltrata = this.bazaDate; }

  private Cautare(termen){
    this.resultHide = false;
    this.bazaFiltrata = this.bazaDate.filter(oriceart => {
      return ((oriceart.pretpezi <= parseInt(termen, 10)) || oriceart.gen.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.zona.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.categorie.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.descriere.toLowerCase().indexOf(termen.toLowerCase()) > -1); } ); }

  private Rafinare() {
    this.resultHide = false;
    this.bazaFiltrata = this.bazaDate.filter(item => {
      return (item.gen.toLowerCase().indexOf(this.sGen.toLowerCase()) > -1) && (item.zona.toLowerCase().indexOf(this.sArea.toLowerCase()) > -1) && (item.categorie.toLowerCase().indexOf(this.sCategory.toLowerCase()) > -1) && (item.descriere.toLowerCase().indexOf(this.sDescription.toLowerCase()) > -1) && (item.pretpezi <= this.sMaxprice); } ); }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: NewrequestPage });
    return await ListModal.present(); }

  async displayArtModal(genAr, titluAr, srcimgAr, zonaAr, categorieAr, descriereAr, contactAr, pretpeziAr, garantieAr): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: ArticolPage,
      componentProps: {
      genArt: genAr,
      titluArt: titluAr,
      srcimgArt: srcimgAr,
      zonaArt: zonaAr,
      categorieArt: categorieAr,
      descriereArt: descriereAr,
      contactArt: contactAr,
      pretpeziArt: pretpeziAr,
      garantieArt: garantieAr },
     });
    return await ListModal.present(); }

  ngOnInit() { this.bazaFiltrata = this.bazaDate; }
}
