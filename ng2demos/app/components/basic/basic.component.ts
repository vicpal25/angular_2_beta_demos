import {Component, View} from 'angular2/core'
import {Hello} from './hello.component';

@Component({
    selector: 'basic',
    templateUrl: './app/templates/basic.component.html'
})


// interface Purchaser {id: int; bankAccount: Account;}

export class Basic {

  constructor(){
    console.log(this);
  }

  sayHello() {
    console.log("Greetings!");
  }

  computedProperties() {

  }


}
