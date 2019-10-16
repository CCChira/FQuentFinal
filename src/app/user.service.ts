import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { throwError } from 'rxjs';
interface User {
    email: any;
    uid: any;
}
@Injectable()
export class UserService {
    public user: User;
    constructor(public afStore: AngularFirestore, public afAuth: AngularFireAuth) { }
    setUser(user: User) {
        this.user = user;
       // this.afStore.collection('Users').add(user);
    }
    setEmail(mail) {
        this.user.email = mail;
    }
    setUID(UID) {
        this.user.uid = UID;
    }
    getEmail() {
        return this.user.email;
    }
}
