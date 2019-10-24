import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';

import { Injectable, Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component( {
  selector: 'app-tooltop',
  templateUrl: './tooltop.page.html',
  styleUrls: ['./tooltop.page.scss'], } )

export class TooltopPage implements OnInit {

  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'Tools by Type';
  private tBarSearchShow: boolean = true; // This page has 1 extra switch, for Search
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextshowCrt: boolean = true;
  private fBarTextCrt: string = 'Add Offers or Requests!';
  private fBarIcon2Hide: boolean = true;
  private hideFAB: boolean = false;

  private ShowHideFAB( miscare ){
    if (miscare === 'ascundeFAB') this.hideFAB = true;
    else if (miscare === 'arataFAB') this.hideFAB = false; }

  constructor(private dataService: DataService, private modalCtrl: ModalController, private router: Router) { }
  private bazaDate = this.dataService.getBazaDate();
  private bazaFiltrata = this.bazaDate;

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
    this.bazaFiltrata = this.bazaDate;
    this.Indexare(); }

  private Cautare(termen) {
    this.bazaFiltrata = this.bazaDate.filter(oriceart => {
      return ((oriceart.pretpezi <= parseInt(termen, 10)) || oriceart.gen.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
      (oriceart.zona.toLowerCase().indexOf(termen.toLowerCase()) > -1) || (oriceart.categorie.toLowerCase().indexOf(termen.toLowerCase()) > -1) ||
      (oriceart.descriere.toLowerCase().indexOf(termen.toLowerCase()) > -1); } );
    this.Indexare(); }

  private Rafinare() {
    this.bazaFiltrata = this.bazaDate.filter(item => {
      return (item.gen.toLowerCase().indexOf(this.sGen.toLowerCase()) > -1) && (item.zona.toLowerCase().indexOf(this.sArea.toLowerCase()) > -1) &&
      (item.categorie.toLowerCase().indexOf(this.sCategory.toLowerCase()) > -1) &&
      (item.descriere.toLowerCase().indexOf(this.sDescription.toLowerCase()) > -1) && (item.pretpezi <= this.sMaxprice); } );
    this.Indexare(); }

  private IndexA = [];

  private Indexare() {
    this.IndexA = this.bazaFiltrata.reduce(function (cumulant, articol) {
      if (cumulant.indexOf(articol.categorie) === -1)
         { cumulant.push(articol.categorie);}
      return cumulant; }, []);
    this.Separare(); }

  private bazaSeparata = [];
  private bazalaIndex = [];
  private numecat = '';

  private Separare() {
    this.bazaSeparata = [];
    for (this.numecat of this.IndexA) {
    this.bazalaIndex = this.bazaFiltrata.filter(item => {
      return (item.categorie.toLowerCase() === this.numecat.toLowerCase()); } );
    this.bazaSeparata.push([{categ: this.numecat}, this.bazalaIndex]); } }

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

  ngOnInit() { this.Indexare(); }
}
