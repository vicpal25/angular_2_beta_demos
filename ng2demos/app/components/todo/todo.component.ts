import { Component } from "angular2/core" ;
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
        host : {
            class : "myClass"
        },
    templateUrl: './app/templates/todo.component.html'
})
export class Todo {

    tasks: FirebaseListObservable<any[]>;
    //tasks: Observable<any[]>;
    constructor(af: AngularFire){

        this.tasks = af.list('/tasks');
        console.log(this.tasks);

    }

    addTask(task : HTMLInputElement): void {

        console.log(`Adding article title: ${task.value} `);
        this.tasks.push(task.value);

    }

    removeTask(id){
        this.tasks.remove(id);
    }

}
