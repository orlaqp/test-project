import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

export interface IAppState {
    appMode: boolean;
}

let state = {
    appMode: false
};

@Injectable({ providedIn: 'root' })
export class Store {

    private stateSubject = new BehaviorSubject<IAppState>(state);

    getState(): Observable<IAppState> {
        return this.stateSubject.asObservable();
    }

    enableAppMode() {
        const newState = this.stateSubject.value;
        state.appMode = true;

        this.stateSubject.next(newState);
    }

    disabledAppMode() {
        const newState = this.stateSubject.value;
        state.appMode = false;

        this.stateSubject.next(newState);
    }

}
