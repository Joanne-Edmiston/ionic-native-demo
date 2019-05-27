import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss']
})
export class VibrationPage implements OnInit {
  constructor(private vibration: Vibration) {}

  ngOnInit() {}

  vibrate() {
    this.vibration.vibrate(2000);
  }

  vibratePattern() {
    this.vibration.vibrate([2000, 1000, 500]);
  }
}
