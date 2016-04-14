import {Component, View} from 'angular2/core';
import {Newsletter} from './newsletter.component';

@Component({
    selector: 'newsletter',
    templateUrl: './app/templates/newsletters.component.html'
})

export class Newsletters {

  newsletters: Array<Newsletter> = [];

  addNewsletter(name:string,source:string){

      const newsletter = new Newsletter(name,source);
      this.newsletters.push(newsletter);

  }

  removeNewsletter(newsletter){

      const index = this.newsletters.indexOf(newsletter);
      this.newsletters.splice(index,1);

  }

}


// interface iNewsletter {
//     name: string;
//     source: string;
// }
