import {Component, View} from 'angular2/core';
import {NewsletterService} from './newsletters';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'keysearch',
    templateUrl: './app/templates/keysearch.component.html'
})

export class KeySearch {

    rows:Observable<Array<any>>;
    cache:Array<any>;

    constructor(public newsletterService:NewsletterService) {
      this.cache = this.newsletterService.newsletters;
    }

    filterByID(obj) {
      var invalidEntries;
      if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
        return true;
      } else {
        invalidEntries++;
        return false;
      }
    }

    onKey(value) {

      var enteredValue = value.srcElement.value;
      var index = 0;
      // this.newsletterService.newsletters.splice(0,1);

      // this.newsletterService.newsletters.filter(a => (a['newsletter'].indexOf(enteredValue) >= 0));

      // this.newsletterService.newsletters.filter(a => console.log(a['newsletter'].indexOf(enteredValue) >= 0));

      this.newsletterService.newsletters = this.newsletterService.newsletters.filter(function (el) {
          return (el['newsletter'].indexOf(enteredValue) >= 0);
      });


      console.log(  this.newsletterService.newsletters );


      //     if(a['newsletter'].indexOf(enteredValue) >= 0) {
      //       console.log(a['newsletter']);
      //     }
      // );
      //
      // // var result = [1, 2, 3].reduce((total, current) => total + current, 0);
      // var even = [3, 1, 56, 7].filter(el => !(el % 2))



    //  console.log(this.newsletterService.newsletters);


      //this.newsletterService.newsletters.reduce((count: number) => count , 0);

      //  this.newsletterService.newsletters.reduce((previousValue: number, currentValue: NewsletterService.newsletter) =>
      //     console.log(previousValue);
      //  ), 0);

      // this.newsletterService.newsletters.filter(this.filterByID);

      //  console.log(this.newsletterService.newsletters);


    }

}
