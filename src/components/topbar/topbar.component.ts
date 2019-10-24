import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'], } )

export class TopbarComponent implements OnInit {
  @Input() private tBarIcon1: boolean;
  @Input() private tBarText: string;
  @Input() private tBarSearch: boolean;
  @Input() private tBarIcon2: boolean;

  @Output() topbarModif = new EventEmitter();
  @Output() menuModif = new EventEmitter();

  public searchTermBar: string = '';

  public Trimite(){ this.topbarModif.emit(this.searchTermBar); }
  public AscundeFAB(){ this.menuModif.emit('ascundeFAB'); }
  public ArataFAB(){ this.menuModif.emit('arataFAB'); }
  public Reseteaza(){ this.searchTermBar = ''; }

  private name = 'Catalina Dumitru';
  private email = 'catalina.dumitru@yahoo.com';
  private password;
  private phone = '0723 456 789';
  constructor(private router: Router, public menuCtrl: MenuController) { }

/*  openMenu() {
     this.menuCtrl.open();
   console.log('menu'); } */

  ngOnInit() {}
}
// <ion-icon src="\assets\icon\user.svg" alt="FlexLogo" slot="start"> </ion-icon>
