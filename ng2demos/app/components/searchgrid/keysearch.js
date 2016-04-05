System.register(['angular2/core', './newsletters'], function(exports_1, context_1) {
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
    var core_1, newsletters_1;
    var KeySearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newsletters_1_1) {
                newsletters_1 = newsletters_1_1;
            }],
        execute: function() {
            KeySearch = (function () {
                function KeySearch(newsletterService) {
                    this.newsletterService = newsletterService;
                    this.cache = this.newsletterService.newsletters;
                }
                KeySearch.prototype.filterByID = function (obj) {
                    var invalidEntries;
                    if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
                        return true;
                    }
                    else {
                        invalidEntries++;
                        return false;
                    }
                };
                KeySearch.prototype.onKey = function (value) {
                    var enteredValue = value.srcElement.value;
                    var index = 0;
                    // this.newsletterService.newsletters.splice(0,1);
                    // this.newsletterService.newsletters.filter(a => (a['newsletter'].indexOf(enteredValue) >= 0));
                    // this.newsletterService.newsletters.filter(a => console.log(a['newsletter'].indexOf(enteredValue) >= 0));
                    this.newsletterService.newsletters = this.newsletterService.newsletters.filter(function (el) {
                        return (el['newsletter'].indexOf(enteredValue) >= 0);
                    });
                    console.log(this.newsletterService.newsletters);
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
                };
                KeySearch = __decorate([
                    core_1.Component({
                        selector: 'keysearch',
                        templateUrl: './app/templates/keysearch.component.html'
                    }), 
                    __metadata('design:paramtypes', [newsletters_1.NewsletterService])
                ], KeySearch);
                return KeySearch;
            }());
            exports_1("KeySearch", KeySearch);
        }
    }
});
//# sourceMappingURL=keysearch.js.map