import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';

// Importing Launch Navigator from Ionic Native to lauch navigation on device
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage {
  destination:string = 'public parking Columbia SC';
  destination1:string = '1051 Greene St, Columbia, SC 29201';
  destination2:string = '1007 Park St, Columbia, SC 29201';
  destination3:string = '821 Park St, Columbia, SC 29201';
  destination4:string = '33.99332938899058, -81.03620917595558';
  start:string;

  constructor(private launchNavigator: LaunchNavigator) { }

  navme(address: string) {
    this.launchNavigator.navigate(address)
    .then(
      success => alert('Launched navigator'),
      error => alert('Error launching navigator: ' + error)
    );;
  }

}
