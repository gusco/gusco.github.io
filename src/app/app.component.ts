import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onLanding = true;
  playAnimation = false;

  ngOnInit() {
  }

  constructor() {
  }

  prepareForLanding = (): void => {
    this.playAnimation = !this.playAnimation;
    setTimeout(() => {
      this.onLanding = !this.onLanding;
      this.playAnimation = false;
    }, 2000);
  }
}

