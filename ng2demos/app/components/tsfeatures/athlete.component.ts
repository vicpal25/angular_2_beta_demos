import {Component} from 'angular2/core'

@Component({
    template: '<h1>Home pageeee</h1><br/><input #name (keyup)="0" /> {{name.value}}'
})

export class Athlete {

  constructor() {
    console.log("yo!");
  }

}
