import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, FirebaseListObservable} from 'angularfire2';

bootstrap(AppComponent, [FIREBASE_PROVIDERS, defaultFirebase('https://todolistng2.firebaseio.com/')]);
