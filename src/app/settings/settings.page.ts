import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'], } )

export class SettingsPage implements OnInit {
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'Settings';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = true;

  constructor(private router: Router) { }

  public toggSwitch1: boolean;
  public toggSwitch2: boolean;
  public toggSwitch3: boolean;
  public toggSwitch4: boolean;
  public toggSwitch5: boolean;
  public curThem1: string;
  public curThem2: string;
  public curThem3: string;
  public curThem4: string;
  public curThem5: string;

  public Temare1() {
    this.curThem1 = localStorage.getItem('tema1saved');  // eventual de luat din Firestore
    if (this.curThem1 != 'modif')  this.curThem1 = 'orig';
    document.documentElement.setAttribute('tema1', this.curThem1);
    this.toggSwitch1 = (this.curThem1 === 'modif'); }

  public switchThem1() {
    if (this.toggSwitch1 === true)  this.curThem1 = 'orig';
    else  this.curThem1 = 'modif';
    this.toggSwitch1 = !this.toggSwitch1;
    document.documentElement.setAttribute('tema1', this.curThem1);
    localStorage.setItem('tema1saved', this.curThem1);  } // eventual de salvat pe Firestore

  public Temare2() {
    this.curThem2 = localStorage.getItem('tema2saved');  // eventual de luat din Firestore
    if (this.curThem2 != 'modif')  this.curThem2 = 'orig';
    document.documentElement.setAttribute('tema2', this.curThem2);
    this.toggSwitch2 = (this.curThem2 === 'modif'); }

  public switchThem2() {
    if (this.toggSwitch2 === true)  this.curThem2 = 'orig';
    else  this.curThem2 = 'modif';
    this.toggSwitch2 = !this.toggSwitch2;
    document.documentElement.setAttribute('tema2', this.curThem2);
    localStorage.setItem('tema2saved', this.curThem2);  } // eventual de salvat pe Firestore

  public Temare3() {
    this.curThem3 = localStorage.getItem('tema3saved');  // eventual de luat din Firestore
    if (this.curThem3 != 'modif')  this.curThem3 = 'orig';
    document.documentElement.setAttribute('tema3', this.curThem3);
    this.toggSwitch3 = (this.curThem3 === 'modif'); }

  public switchThem3() {
    if (this.toggSwitch3 === true)  this.curThem3 = 'orig';
    else  this.curThem3 = 'modif';
    this.toggSwitch3 = !this.toggSwitch3;
    document.documentElement.setAttribute('tema3', this.curThem3);
    localStorage.setItem('tema3saved', this.curThem3);  } // eventual de salvat pe Firestore

  public Temare4() {
    this.curThem4 = localStorage.getItem('tema4saved');  // eventual de luat din Firestore
    if (this.curThem4 != 'modif')  this.curThem4 = 'orig';
    document.documentElement.setAttribute('tema4', this.curThem4);
    this.toggSwitch4 = (this.curThem4 === 'modif'); }

  public switchThem4() {
    if (this.toggSwitch4 === true)  this.curThem4 = 'orig';
    else  this.curThem4 = 'modif';
    this.toggSwitch4 = !this.toggSwitch4;
    document.documentElement.setAttribute('tema4', this.curThem4);
    localStorage.setItem('tema4saved', this.curThem4);  } // eventual de salvat pe Firestore

  public Temare5() {
    this.curThem5 = localStorage.getItem('tema5saved');  // eventual de luat din Firestore
    if (this.curThem5 != 'modif')  this.curThem5 = 'orig';
    document.documentElement.setAttribute('tema5', this.curThem5);
    this.toggSwitch5 = (this.curThem5 === 'modif'); }

  public switchThem5() {
    if (this.toggSwitch5 === true)  this.curThem5 = 'orig';
    else  this.curThem5 = 'modif';
    this.toggSwitch5 = !this.toggSwitch5;
    document.documentElement.setAttribute('tema5', this.curThem5);
    localStorage.setItem('tema5saved', this.curThem5);  } // eventual de salvat pe Firestore

  ngOnInit() {
    this.Temare1();
    this.Temare2();
    this.Temare3();
    this.Temare4();
    this.Temare5(); }
}
