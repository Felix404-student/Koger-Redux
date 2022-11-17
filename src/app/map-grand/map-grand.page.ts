import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-grand',
  templateUrl: './map-grand.page.html',
  styleUrls: ['./map-grand.page.scss'],
})
export class MapGrandPage {

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
