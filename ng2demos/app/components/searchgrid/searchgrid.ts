// http://stackoverflow.com/questions/34590168/what-are-typescript-typings
// https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/core';
import {Column} from './column';
import {Sortable} from './sortable';
import {KeySearch} from './keysearch';

@Component({
    selector: 'grid',
    properties: ['rows: rows','columns: columns'],
    templateUrl: './app/templates/searchgrid.component.html',
    directives: [KeySearch]
})


export class SearchGrid {

    columns:Array<Column>;
    rows:Array<any>;

    constructor() {

         this.columns = [
             new Column('newsletter','Name'),
             new Column('status','Status'),
             new Column('newsleterid','Newsletter ID')
         ];

         this.rows = [
           {newsletter:'South Sentinel Midday Report',status:'Production',newsleterid:2089098223},
           {newsletter:'Los Angeles Times Breaking News',status:'Test',newsleterid:2089098022},
           {newsletter:'South Florida Local Hollywood',status:'Production',newsleterid:2089094504},
           {newsletter:'South Florida Travel Unraveled',status:'Test',newsleterid:2089098061}
         ]

    }

    sorter = new Sortable();

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
