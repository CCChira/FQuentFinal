import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';

import { Injectable, Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'], })

export class MarketPage implements OnInit {

  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = "Tool's Market";
  private tBarSearchShow: boolean = true; // This page has 1 extra switch, for Search
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt: string = 'Hurry up! Deals are hunted.';
  private fBarIcon2Hide: boolean = true;
  private hideFAB: boolean = false;

  private ShowHideFAB( miscare ){
    if (miscare === 'ascundeFAB') this.hideFAB = true;
    else if (miscare === 'arataFAB') this.hideFAB = false; }

  private bazaDate = [ ];

  constructor(private dataService: DataService, private modalCtrl: ModalController, private router: Router) {
    this.bazaDate = this.dataService.getBazaDate(); }

  private serchInit: string = '';
  private sGen: string = '';
  private sArea: string = '';
  private sCategory: string = '';
  private sDescription: string = '';
  private sMaxprice: number = 1000;
  private refinedHide: boolean = true;

  private ShowRefined() {
    this.tBarSearchShow = !this.tBarSearchShow;
    this.refinedHide = !this.refinedHide;
    this.sGen = '';
    this.sArea = '';
    this.sCategory = '';
    this.sDescription = '';
    this.sMaxprice = 1000;
    this.bazaFiltrata = this.bazaDate; }

  private bazaFiltrata = [];
  private Cautare(termen){
    this.bazaFiltrata = this.bazaDate.filter(oriceart => {
      return ((oriceart.pretpezi <= parseInt(termen, 10)) || oriceart.gen.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
      (oriceart.zona.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.categorie.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
      (oriceart.descriere.toLowerCase().indexOf(termen.toLowerCase()) > -1); } ); }

  private Rafinare() {
    this.bazaFiltrata = this.bazaDate.filter(item => {
      return (item.gen.toLowerCase().indexOf(this.sGen.toLowerCase()) > -1) && (item.zona.toLowerCase().indexOf(this.sArea.toLowerCase()) > -1) &&
      (item.categorie.toLowerCase().indexOf(this.sCategory.toLowerCase()) > -1) &&
      (item.descriere.toLowerCase().indexOf(this.sDescription.toLowerCase()) > -1) && (item.pretpezi <= this.sMaxprice); } ); }

  async displayOfrModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component: NewofferPage });
    return await ListModal.present(); }

  async displayReqModal(): Promise <void> {
    const ListModal = await this.modalCtrl.create({ component: NewrequestPage });
    return await ListModal.present(); }

  async displayArtModal( item ): Promise <void> {
    const ListModal = await this.modalCtrl.create({
      component: ArticolPage,
      componentProps: {
      genArt: item.gen,
      titluArt: item.titlu,
      srcimgArt: item.srcimg,
      zonaArt: item.zona,
      categorieArt: item.categorie,
      descriereArt: item.descriere,
      contactArt: item.contact,
      pretpeziArt: item.pretpezi,
      garantieArt: item.garantie },  });
    return await ListModal.present(); }

  ngOnInit() { this.bazaFiltrata = this.bazaDate; }
}
