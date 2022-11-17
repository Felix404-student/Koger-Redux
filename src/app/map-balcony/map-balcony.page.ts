import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-balcony',
  templateUrl: './map-balcony.page.html',
  styleUrls: ['./map-balcony.page.scss'],
})
export class MapBalconyPage {

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
