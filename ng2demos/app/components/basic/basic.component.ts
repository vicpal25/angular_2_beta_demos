//NOTES: @Component is an annotation >  So it seems that @Component adds some
//NOTES: metadata to the class in order to give it a specific meaning.
import {Component, View} from 'angular2/core'
import {Hello} from './hello.component';

//NOTES: @Component is an annotation >  So it seems that @Component adds some
//NOTES: metadata to the class in order to give it a specific meaning.
@Component({

    //NOTES: Uses Web Components to render template as the selector
    selector: 'basic',
    //NOTES: Template URL which references logic
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

  }


}
