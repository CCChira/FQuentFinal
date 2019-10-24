import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { throwError } from 'rxjs';

interface User { /* name: any, */ email: any; uid: any; /* password: any */ }

@Injectable()
export class UserService {

  public user: User;

  constructor(public afStore: AngularFirestore, public afAuth: AngularFireAuth) { }

  setUser( user: User ) {  this.user = user; } // this.afStore.collection('Users').add(user);
  setEmail( mail ) { this.user.email = mail; }
  setUID( UID ) { this.user.uid = UID; }
  getEmail( ) { return this.user.email; }

/*  public userel: User;
  public toggSwitch5: boolean;

  public getlocalUser() {
    this.userel.name = localStorage.getItem('usernameSaved');
    if (this.userel.name) this.user.name = this.userel.name;
    this.userel.email = localStorage.getItem('useremailSaved');
    if (this.userel.email) this.user.email = this.userel.email;
    this.userel.uid = localStorage.getItem('useruidSaved');
    if (this.userel.uid) this.user.uid = this.userel.uid;
    this.userel.password = localStorage.getItem('userpasswordSaved');
    if (this.userel.password) this.user.password = this.userel.password;
    return this.user; }

  public setlocalUser() {
    localStorage.setItem('usernameSaved', this.userel.name);
    localStorage.setItem('useremailsaved', this.userel.email);
    localStorage.setItem('useruidSaved', this.userel.uid);
    localStorage.setItem('userpasswordSaved', this.userel.password); */
}
