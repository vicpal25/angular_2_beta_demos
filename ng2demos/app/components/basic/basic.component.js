System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Basic;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //NOTES: @Component is an annotation >  So it seems that @Component adds some
            //NOTES: metadata to the class in order to give it a specific meaning.
            Basic = (function () {
                function Basic() {
                    console.log(this);
                }
                Basic.prototype.sayHello = function () {
                    console.log("Greetings!");
                };
                Basic.prototype.computedProperties = function () {
                };
                Basic = __decorate([
                    core_1.Component({
                        //NOTES: Uses Web Components to render template as the selector
                        selector: 'basic',
                        //NOTES: Template URL which references logic
                        templateUrl: './app/templates/basic.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Basic);
                return Basic;
            }());
            exports_1("Basic", Basic);
        }
    }
});
//# sourceMappingURL=basic.component.js.map