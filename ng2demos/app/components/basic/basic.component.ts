import {Component, View} from 'angular2/core'
import {Hello} from './hello.component';

@Component({
    selector: 'basic',
    templateUrl: './app/templates/basic.component.html'
})

export class Basic {

  constructor(){

    console.log(this);

  }

  sayHello() {
    console.log("Greetings!");
  }

  computedProperties() {

    type NeighborMap = { [name: string]: Node };
    type Node = { name: string; neighbors: NeighborMap;}

    function makeNode(name: string, initialNeighbor: Node): Node {
        return {
            name: name,
            neighbors: {
                [initialNeighbor.name]: initialNeighbor
            }
        }
    }


  }


}
