import {Component, View} from 'angular2/core'

@Component({
    selector: 'hello',
    properties: ['name: name']
})

@View({
  template:`<h1>Hello {{_name}}</h1>`
})

export class Hello {
  _name: string;

  constructor() {
    console.log(this);
  };

  set name(name){
    this._name = name;
  }

}
