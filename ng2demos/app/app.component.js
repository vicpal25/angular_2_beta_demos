System.register(['angular2/core', 'angular2/router', './components/home/home.component', './components/basic/basic.component', './components/newsletters/newsletters.component', './components/tsfeatures/athlete.component', './components/masterdetail/newsletter.service', './components/masterdetail/newsletter-detail.component', './components/masterdetail/campaign.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, basic_component_1, newsletters_component_1, athlete_component_1, newsletter_service_1, newsletter_detail_component_1, campaign_component_1;
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
            },
            function (athlete_component_1_1) {
                athlete_component_1 = athlete_component_1_1;
            },
            function (newsletter_service_1_1) {
                newsletter_service_1 = newsletter_service_1_1;
            },
            function (newsletter_detail_component_1_1) {
                newsletter_detail_component_1 = newsletter_detail_component_1_1;
            },
            function (campaign_component_1_1) {
                campaign_component_1 = campaign_component_1_1;
            }],
        execute: function() {
            // import {SearchGrid} from './components/searchgrid/searchgrid';
            // import { DashboardComponent } from './components/heroes/dashboard.component';
            // import { HeroesComponent } from './components/heroes/heroes.component';
            // import { HeroDetailComponent } from './components/heroes/hero-detail.component';
            // import { HeroService } from './components/heroes/hero.service';
            //
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: './app/templates/nav.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [router_1.ROUTER_PROVIDERS, newsletter_service_1.NewsletterService]
                }),
                router_1.RouteConfig([
                    { path: '/', name: 'Home', component: home_component_1.Home, useAsDefault: true },
                    { path: '/basic', name: 'Basic', component: basic_component_1.Basic },
                    { path: '/newsletters', name: 'Newsletters', component: newsletters_component_1.Newsletters },
                    // { path: '/searchgrid', name: 'SearchGrid', component: SearchGrid },
                    { path: '/newsletters/:id', name: 'NewslettersDetail', component: newsletter_detail_component_1.NewsletterDetailComponent },
                    { path: '/campaign', name: 'Campaign', component: campaign_component_1.CampaignComponent },
                    { path: '/ts', name: 'Athelete', component: athlete_component_1.Athelete }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map