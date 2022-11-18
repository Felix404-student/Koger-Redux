import { Component, Injectable, OnInit } from '@angular/core';

// Importing Launch Navigator from Ionic Native to lauch navigation on device
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
@Injectable()
export class ParkingPage {
  destination:string;
  start:string;

  constructor(
      private launchNavigator: LaunchNavigator,
      destination?: string
  ) {
      this.start = "";
      if (destination) {
        this.destination = destination;
      } else {
        this.destination = "public parking Columbia SC";
      }
  }

  navigate(){
      let options: LaunchNavigatorOptions = {
          start: this.start
      };

      this.launchNavigator.navigate(this.destination, options)
          .then(
              success => alert('Launched navigator'),
              error => alert('Error launching navigator: ' + error)
          );
  }
}
