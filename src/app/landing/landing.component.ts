import { Component, OnInit } from "@angular/core";
import { animate } from '@angular/animations';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  showWelcome = false;

  constructor() {}

  ngOnInit() {}

  contentClicked() {
      this.showWelcome = true;
  }
}
