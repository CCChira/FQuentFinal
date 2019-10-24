import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ArticolPage } from 'src/app/articol/articol.page';

import { Injectable, Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], })

export class HomePage implements OnInit {
  private tBarHide: boolean = true;
  private tBarIcon1Hide: boolean = true;
  private tBarTextCrt: string = 'Welcome to Our App!';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(private dataService: DataService, private modalCtrl: ModalController, private router: Router) { }

  private bazaDate = this.dataService.getBazaDate();
  private bazaFiltrata = this.bazaDate;
  private IndexA = [];
  private maxIndex = 6;
  private j = 0;
  private k = 0;
  private articol;
  private cont = 0;

  private Indexare(){
    for ( this.j = 0; this.j < this.maxIndex; this.j++ )
      this.IndexA.push(0);
    for ( this.articol of this.bazaDate){
      this.cont = 0;
      for ( this.j = 0; this.j < this.maxIndex && this.cont === 0 ; this.j++ ) {
        if ( this.articol.id > this.IndexA[this.j] ) {
          for ( this.k = this.maxIndex - 1; this.k > this.j; this.k-- ) {
            this.IndexA[this.k] = this.IndexA[this.k-1]; }
          this.IndexA[this.j] = this.articol.id;
        this.cont = 1; } } }
    this.Separare(); }

  private bazaSeparata = [];

  private Separare() {
    for( this.j = 0; this.j < this.maxIndex; this.j++ ) {
      for ( this.articol of this.bazaDate ) {
        if ( this.articol.id === this.IndexA[this.j] )
          this.bazaSeparata.push(this.articol); } } }

  async displayArtModal(item): Promise <void> {
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

  ngOnInit() {
    this.Indexare(); }
}
