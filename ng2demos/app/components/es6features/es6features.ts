import {Component, View} from 'angular2/core'
import {Car} from './car';

@Component({
    selector: 'es6features',
    templateUrl: './app/templates/car.component.html'
})


export class Es6features {

  car: string;

  constructor() {
    this.car = new Car('v8');
    console.log(this.car);
  }

  startcar() {
    return this.car;
  }




}
