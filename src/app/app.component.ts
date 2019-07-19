import { Component } from '@angular/core';
import { Store, IAppState } from './store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    state$: Observable<IAppState>;

    constructor(store: Store) {
        this.state$ = store.getState();

        setTimeout(() => {
            store.enableAppMode();
        }, 1000);
    }


}
