import { Component, OnInit } from '@angular/core';
import { animate } from '@angular/animations';
import { Store, IAppState } from '../store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  state$: Observable<IAppState>;
  showWelcome = false;

  constructor(private store: Store) {
      this.state$ = store.getState();
  }

  ngOnInit() {}

  switchToAppMode() {
    this.store.enableAppMode();
  }
}
