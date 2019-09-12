import { Injectable } from '@angular/core';
/// import 'rxjs/add/operator/map';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import { GooglePlus, GooglePlusOriginal } from '@ionic-native/google-plus';
@Injectable()
export class AuthService {
    public state = {};
    public isCorrect = {};
    constructor(public afAuth: AngularFireAuth/*, public googleplus: GooglePlusOriginal*/) {
        this.isCorrect = 0;
    }
    login(email, pass) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
    }
    loginGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    loginFacebook() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
    loginStatus() {
        this.afAuth.authState.subscribe(state => {
            this.state = state;
        });
    }
    sendMail(mail) {
   // lipsa procedura de trimis mail de recuperare   
    }
    /*logOut() {
        this.googleplus.logout().then(() => {
            this.afAuth.auth.signOut();
        },
        () => {
            this.afAuth.auth.signOut();
        });
    }*/
}
