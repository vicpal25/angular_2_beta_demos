import {Component, View} from 'angular2/core'

@Component({
    selector: 'car',
    template: 'yo'
})

// TypeScript
export abstract class Car {
    // Property (public by default)
    engine: string;

    // Constructor
    // (accepts a value so you can initialize engine)
    constructor(engine: string) {
        this.engine = engine;
    }
}
