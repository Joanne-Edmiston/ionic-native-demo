import { Component, OnInit } from '@angular/core';
import {
  Camera,
  CameraOptions,
  DestinationType,
  PictureSourceType,
  EncodingType
} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss']
})
export class CameraPage implements OnInit {
  public imgSrc: any;
  constructor(private camera: Camera) {}

  ngOnInit() {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imgSrc = 'data:image/jpeg;base64,' + imageData;
      },
      err => {
        console.log('Camera issue' + err);
      }
    );
  }
}
