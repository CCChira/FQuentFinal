import { Injectable, Directive } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {

  private bazaDateServer = [
    {"id":1, "iduser":1, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Ryobi2.jpg", "zona":"Baciu", "categorie":"Bormasina", "descriere":"foarte compacta", "contact":"0725123456", "pretpezi":75, "garantie":true},
    {"id":22, "iduser":6, "gen":"Offer", "titlu":"Am nevoie", "srcimg":"/assets/samples/Dewalt2.jpg", "zona":"Manastur", "categorie":"Diverse", "descriere":"necesita capse GW M16", "contact":"0752238274", "pretpezi":30, "garantie":true},
    {"id":4, "iduser":2, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Makita2.jpg", "zona":"Gheorghieni", "categorie":"Bormasina", "descriere":"cu percutie", "contact":"0731457065", "pretpezi":60, "garantie":true},
    {"id":18, "iduser":5, "gen":"Offer", "titlu":"Am de dat", "srcimg":"/assets/samples/Yikoda.jpg", "zona":"Gruia", "categorie":"Filetanta", "descriere":"merge foarte bine", "contact":"0795679466", "pretpezi":50, "garantie":true},
    {"id":25, "iduser":20, "gen":"Request", "titlu":"Vreau", "srcimg":"/assets/samples/Portavoce.jpg", "zona":"Floresti", "categorie":"Filetanta", "descriere":"nu am nevoie de burghie", "contact":"0745123456", "pretpezi":40, "garantie":false},
    {"id":7, "iduser":3, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Milwaukee.jpg", "zona":"Gheorghieni", "categorie":"Flex", "descriere":"are disc cu widia", "contact":"0745123456", "pretpezi":60, "garantie":false},
    {"id":20, "iduser":17, "gen":"Offer", "titlu":"Caut", "srcimg":"/assets/samples/Blackdecker3.jpg", "zona":"Floresti", "categorie":"Diverse", "descriere":"nu ofer lame", "contact":"0762206270", "pretpezi":60, "garantie":true},
    {"id":8, "iduser":6, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Ryobi.jpg", "zona":"Gruia", "categorie":"Flex", "descriere":"este cu acumulatori", "contact":"0749234658", "pretpezi":30, "garantie":true},
    {"id":16, "iduser":6, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Makita.jpg", "zona":"Manastur", "categorie":"Filetanta", "descriere":"pret foarte avantajos", "contact":"0787457062", "pretpezi":30, "garantie":true},
    {"id":11, "iduser":10, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Makita4.jpg", "zona":"Manastur", "categorie":"Flex", "descriere":"este foarte robust", "contact":"0761568264", "pretpezi":50, "garantie":false},
    {"id":12, "iduser":11, "gen":"Request", "titlu":"Am de inchiriat", "srcimg":"/assets/samples/Portavoce.jpg", "zona":"Europa", "categorie":"Flex", "descriere":"nu am nevoie de discuri", "contact":"0765679466", "pretpezi":50, "garantie":true},
    {"id":14, "iduser":14, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Blackdecker.jpg", "zona":"Intre Ape", "categorie":"Filetanta", "descriere":"foarte performanta", "contact":"0789234658", "pretpezi":60, "garantie":false},
    {"id":3, "iduser":3, "gen":"Offer", "titlu":"De inchiriat", "srcimg":"/assets/samples/Bosch1.jpg", "zona":"Manastur", "categorie":"Bormasina", "descriere":"nu are percutie", "contact":"0729345862", "pretpezi":65, "garantie":false},
    {"id":15, "iduser":2, "gen":"Offer", "titlu":"Am de inchiriat", "srcimg":"/assets/samples/Bosch3.jpg", "zona":"Baciu", "categorie":"Filetanta", "descriere":"ieftina si buna", "contact":"0743345860", "pretpezi":40, "garantie":true},
    {"id":6, "iduser":5, "gen":"Request", "titlu":"Am de inchiriat", "srcimg":"/assets/samples/Portavoce.jpg", "zona":"Manastur", "categorie":"Bormasina", "descriere":"nu am nevoie de percutie", "contact":"0735679471", "pretpezi":70, "garantie":true},
    {"id":17, "iduser":15, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Status.jpg", "zona":"Gheorghieni", "categorie":"Filetanta", "descriere":"tocmai am schimbat periile", "contact":"0791568264", "pretpezi":40, "garantie":false},
    {"id":9, "iduser":7, "gen":"Offer", "titlu":"Am de inchiriat", "srcimg":"/assets/samples/Blackdecker4.jpg", "zona":"Baciu", "categorie":"Flex", "descriere":"are disc bun", "contact":"0753345860", "pretpezi":45, "garantie":true},
    {"id":5, "iduser":4, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Blackdecker2.jpg", "zona":"Gruia", "categorie":"Bormasina", "descriere":"de putere mare", "contact":"0733568268", "pretpezi":55, "garantie":true},
    {"id":19, "iduser":16, "gen":"Request", "titlu":"Vreau drujba", "srcimg":"/assets/samples/Portavoce.jpg", "zona":"Marasti", "categorie":"Diverse", "descriere":"am nevoie de lant nou", "contact":"0739790668", "pretpezi":40, "garantie":false},
    {"id":13, "iduser":1, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Dewalt.jpg", "zona":"Marasti", "categorie":"Filetanta", "descriere":"acumulatorii nu tin mult", "contact":"0745123456", "pretpezi":30, "garantie":false},
    {"id":21, "iduser":18, "gen":"Offer", "titlu":"Vreau", "srcimg":"/assets/samples/Bosch4.jpg", "zona":"Someseni", "categorie":"Diverse", "descriere":"are 4 kW motorul", "contact":"0792222272", "pretpezi":100, "garantie":true},
    {"id":2, "iduser":2, "gen":"Offer", "titlu":"Ofer", "srcimg":"/assets/samples/Blaupunkt2.jpg", "zona":"Marasti", "categorie":"Bormasina", "descriere":"nu are percutie", "contact":"0757234659", "pretpezi":50, "garantie":true},
    {"id":10, "iduser":8, "gen":"Offer", "titlu":"Dau", "srcimg":"/assets/samples/Blaupunkt.jpg", "zona":"Marasti", "categorie":"Flex", "descriere":"doar pentru taiat lemn", "contact":"0757457062", "pretpezi":45, "garantie":true},
    {"id":23, "iduser":19, "gen":"Offer", "titlu":"Doresc", "srcimg":"/assets/samples/Husqvarna.jpg", "zona":"Gara", "categorie":"Diverse", "descriere":"trebuie benzina verde", "contact":"0792158264", "pretpezi":80, "garantie":false},
    {"id":24, "iduser":5, "gen":"Offer", "titlu":"Caut", "srcimg":"/assets/samples/Makita3.jpg", "zona":"Gruia", "categorie":"Diverse", "descriere":"nu are protectie", "contact":"0796567946", "pretpezi":90, "garantie":true},
  ];

  constructor() { }

  setBaza( baza ) {
     this.bazaDateServer = baza; }

  getBaza() {
   return this.bazaDateServer; }
}
