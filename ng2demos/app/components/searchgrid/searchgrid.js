System.register(['angular2/core', './column', './sortable', './keysearch', './newsletters'], function(exports_1, context_1) {
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
    var core_1, column_1, sortable_1, keysearch_1, newsletters_1;
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
            },
            function (newsletters_1_1) {
                newsletters_1 = newsletters_1_1;
            }],
        execute: function() {
            let SearchGrid = class SearchGrid {
                constructor(newsletterService) {
                    this.newsletterService = newsletterService;
                    this.sorter = new sortable_1.Sortable();
                    this.columns = [
                        new column_1.Column('newsletter', 'Name'),
                        new column_1.Column('status', 'Status'),
                        new column_1.Column('newsleterid', 'Newsletter ID')
                    ];
                    this.rows = this.newsletterService.newsletters;
                }
                sort(key) {
                    this.sorter.sort(key, this.rows);
                    console.log(this.newsletterService.newsletters);
                }
            };
            SearchGrid = __decorate([
                core_1.Component({
                    selector: 'grid',
                    properties: ['rows: rows', 'columns: columns'],
                    templateUrl: './app/templates/searchgrid.component.html',
                    directives: [keysearch_1.KeySearch]
                }), 
                __metadata('design:paramtypes', [newsletters_1.NewsletterService])
            ], SearchGrid);
            exports_1("SearchGrid", SearchGrid);
        }
    }
});
//# sourceMappingURL=searchgrid.js.map