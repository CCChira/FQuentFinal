import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from '../providers/auth-tools/auth-tools';
import { PasswordValidator } from '../validators/password.validator';
import { EmailValidator } from '../validators/email.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from 'src/components/topbar/topbar.component';
import { FootbarComponent } from 'src/components/footbar/footbar.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { OfferService } from './offer.service';
/// import { AuthServiceModule } from '../providers/auth-tools/auth-tools';
import { NewofferPage } from 'src/app/newoffer/newoffer.page';
import { NewrequestPage } from 'src/app/newrequest/newrequest.page';
import { ArticolPage } from 'src/app/articol/articol.page';
import { ToolerModule } from 'src/components/tooler.module';
import { DataService } from 'src/app/data.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireAuthModule,
                AngularFireDatabaseModule,
                AngularFirestoreModule,
                ToolerModule,
                ReactiveFormsModule
            ],
            providers: [
                EmailValidator,
                PasswordValidator,
                AuthService,
                TopbarComponent,
                FootbarComponent,
                NewofferPage,
                NewrequestPage,
                ArticolPage,
                DataService,
                StatusBar,
                SplashScreen,
                Geolocation,
                UserService,
                OfferService,
                NativeGeocoder,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map