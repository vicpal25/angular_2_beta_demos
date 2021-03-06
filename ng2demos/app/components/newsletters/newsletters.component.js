System.register(['angular2/core', './newsletter.component'], function(exports_1, context_1) {
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
    var core_1, newsletter_component_1;
    var Newsletters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newsletter_component_1_1) {
                newsletter_component_1 = newsletter_component_1_1;
            }],
        execute: function() {
            Newsletters = (function () {
                function Newsletters() {
                    this.newsletters = [];
                }
                Newsletters.prototype.addNewsletter = function (name, source) {
                    var newsletter = new newsletter_component_1.Newsletter(name, source);
                    this.newsletters.push(newsletter);
                };
                Newsletters.prototype.removeNewsletter = function (newsletter) {
                    var index = this.newsletters.indexOf(newsletter);
                    this.newsletters.splice(index, 1);
                };
                Newsletters = __decorate([
                    core_1.Component({
                        selector: 'newsletter',
                        templateUrl: './app/templates/newsletters.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Newsletters);
                return Newsletters;
            }());
            exports_1("Newsletters", Newsletters);
        }
    }
});
// interface iNewsletter {
//     name: string;
//     source: string;
// }
//# sourceMappingURL=newsletters.component.js.map