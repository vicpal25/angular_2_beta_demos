// http://stackoverflow.com/questions/34590168/what-are-typescript-typings
// https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/core';
import {Column} from './column';
import {Sortable} from './sortable';
import {KeySearch} from './keysearch';
import {NewsletterService} from './newsletters';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'grid',
    properties: ['rows: rows','columns: columns'],
    templateUrl: './app/templates/searchgrid.component.html',
    directives: [KeySearch]
})

export class SearchGrid {

    columns:Array<Column>;
    rows:Array<any>;

    constructor(public newsletterService:NewsletterService) {

         this.columns = [
             new Column('newsletter','Name'),
             new Column('status','Status'),
             new Column('newsleterid','Newsletter ID')
         ];

        this.rows = this.newsletterService.newsletters;
    }

    sorter = new Sortable();

    sort(key){
        this.sorter.sort(key, this.rows);
        console.log(this.newsletterService.newsletters);
    }
}
