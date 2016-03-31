System.register(['angular2/core', './column', './sortable', './keysearch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, column_1, sortable_1, keysearch_1;
    var SearchGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            },
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            },
            function (keysearch_1_1) {
                keysearch_1 = keysearch_1_1;
            }],
        execute: function() {
            SearchGrid = (function () {
                function SearchGrid() {
                    this.sorter = new sortable_1.Sortable();
                    this.columns = [
                        new column_1.Column('newsletter', 'Name'),
                        new column_1.Column('status', 'Status'),
                        new column_1.Column('newsleterid', 'Newsletter ID')
                    ];
                    this.rows = [
                        { newsletter: 'South Sentinel Midday Report', status: 'Production', newsleterid: 2089098223 },
                        { newsletter: 'Los Angeles Times Breaking News', status: 'Test', newsleterid: 2089098022 },
                        { newsletter: 'South Florida Local Hollywood', status: 'Production', newsleterid: 2089094504 },
                        { newsletter: 'South Florida Travel Unraveled', status: 'Test', newsleterid: 2089098061 }
                    ];
                }
                SearchGrid.prototype.sort = function (key) {
                    this.sorter.sort(key, this.rows);
                };
                SearchGrid = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        properties: ['rows: rows', 'columns: columns'],
                        templateUrl: './app/templates/searchgrid.component.html',
                        directives: [keysearch_1.KeySearch]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchGrid);
                return SearchGrid;
            }());
            exports_1("SearchGrid", SearchGrid);
        }
    }
});
//# sourceMappingURL=searchgrid.js.map