import {Component} from 'angular2/core'

@Component({
    selector: 'home',
    template: '<h1>Home pageeee</h1><br/><input #name (keyup)="0" /> {{name.value}}'
})

export class Home {

  constructor() {
    console.log("yo!");
  }

}
