import {Component, View, Injectable} from 'angular2/core'
import {Car} from './car';

@Component({
    selector: 'tesla',
    templateUrl: './app/templates/tesla.component.html'
})


@Injectable()
export class Tesla extends Car {

  // car: string;
  smallTires: boolean;

  constructor(engine: string, smallTires: boolean) {
     super(engine);
     this.smallTires = smallTires;
  }
  //
  // startcar() {
  //   return this.car;
  // }




}
