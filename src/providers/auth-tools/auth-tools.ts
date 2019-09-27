import { Component, Input, OnInit } from '@angular/core';
import { Injectable, Directive } from '@angular/core';
// import 'rxjs/add/operator/map';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/data.service';

@Injectable()
export class AuthService {
  public state = {};
  public isCorrect = {};
  public isLogged: {};
  public bazaIDloco = [ ];

  constructor(private dataService: DataService, public afAuth: AngularFireAuth, /*public googleplus: GooglePlusOriginal*/) {
    this.bazaIDloco = this.dataService.getBazaID();
    this.isCorrect = 0; }

  public login(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass)}

  public loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }

  public loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()); }

  public loginStatus() {
    this.afAuth.authState.subscribe(state => {
      this.state = state;  } ); }

  sendMail(mail) { }
   // lipsa procedura de trimis mail de recuperare

  logOut() { }
   // lipsa procedura de delogare

  ngOnInit() {}
}
