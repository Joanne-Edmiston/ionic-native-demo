import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss']
})
export class GeoPage implements OnInit {
  public location: any;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {}

  getGeolocation() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    });
  }
}
