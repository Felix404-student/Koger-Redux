import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { Firestore } from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { SplashScreen } from '@capacitor/splash-screen';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { StatusBar, Style } from '@capacitor/status-bar';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule, AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp()),
    provideFirestore(() => getFirestore()),],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirestoreModule,
    EmailComposer,
    PhotoViewer,
    BarcodeScanner,
    SocialSharing,
    LaunchNavigator,
    CallNumber
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
