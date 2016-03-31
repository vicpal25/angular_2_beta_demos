// http://stackoverflow.com/questions/34590168/what-are-typescript-typings
// https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/core';
import {Column} from './column';
import {Sortable} from './sortable';

@Component({
    selector: 'grid',
    properties: ['rows: rows','columns: columns'],
    templateUrl: './app/templates/searchgrid.component.html'
})

export class SearchGrid {

    columns:Array<Column>;
    rows:Array<any>;

    constructor() {
      
         this.columns = [
             new Column('newsletter','First Name'),
             new Column('newsletter','Last Name'),
             new Column('age','Age')
         ];

         this.rows = [
           {newsletter:'Joe',lastName:'Jackson',age:20},
           {newsletter:'Peter',lastName:'Smith',age:30},
           {newsletter:'Jane',lastName:'Doe',age:50},
           {newsletter:'Tim',lastName:'Smith',age:80}
         ]

    }

    sorter = new Sortable();

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
