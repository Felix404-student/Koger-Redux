import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-seats-grand',
  templateUrl: './map-seats-grand.page.html',
  styleUrls: ['./map-seats-grand.page.scss'],
})
export class MapSeatsGrandPage {

  sliderOpts = {
    zoom: {
      maxRatio:2
    }
  };

  constructor(
    // private photoViewer: PhotoViewer
    ) { }

  // zoomImage(imageData) {
  //   this.photoViewer.show(imageData);
  // }

}
