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

    sorter = new Sortable();

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
