System.register(['angular2/core', 'angular2/router', './components/home/home.component', './components/basic/basic.component', './components/newsletters/newsletters.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, basic_component_1, newsletters_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (basic_component_1_1) {
                basic_component_1 = basic_component_1_1;
            },
            function (newsletters_component_1_1) {
                newsletters_component_1 = newsletters_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n         <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" [routerLink]=\"['Home']\">ANGULAR 2 APP</a>\n                </div>\n                <div id=\"navbar\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a [routerLink]=\"['Home']\">Home</a></li>\n                    <li><a [routerLink]=\"['Basic']\">Basic</a></li>\n                    <li><a [routerLink]=\"['Newsletters']\">Newsletters</a></li>\n                </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"container\">\n            <div class=\"starter-template\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.Home },
                        { path: '/basic', name: 'Basic', component: basic_component_1.Basic },
                        { path: '/newsletters', name: 'Newsletters', component: newsletters_component_1.Newsletters }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map