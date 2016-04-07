System.register(['angular2/core', 'angular2/router', './newsletter-detail.component', './newsletter.service'], function(exports_1, context_1) {
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
    var core_1, router_1, newsletter_detail_component_1, newsletter_service_1;
    var CampaignComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (newsletter_detail_component_1_1) {
                newsletter_detail_component_1 = newsletter_detail_component_1_1;
            },
            function (newsletter_service_1_1) {
                newsletter_service_1 = newsletter_service_1_1;
            }],
        execute: function() {
            CampaignComponent = (function () {
                function CampaignComponent(_router, _newsletterService) {
                    this._router = _router;
                    this._newsletterService = _newsletterService;
                }
                CampaignComponent.prototype.getNewsletters = function () {
                    var _this = this;
                    this._newsletterService.getNewsletters().then(function (newsletters) { return _this.newsletters = newsletters; });
                };
                CampaignComponent.prototype.ngOnInit = function () {
                    this.getNewsletters();
                };
                CampaignComponent.prototype.onSelect = function (newsletter) { this.selectedNewsletter = newsletter; };
                CampaignComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['NewslettersDetail', { id: this.selectedNewsletter.id }]);
                };
                CampaignComponent = __decorate([
                    core_1.Component({
                        selector: 'newsletters',
                        templateUrl: './app/templates/campaign.component.html',
                        styleUrls: ['./app/templates/campaign.component.css'],
                        directives: [newsletter_detail_component_1.NewsletterDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, newsletter_service_1.NewsletterService])
                ], CampaignComponent);
                return CampaignComponent;
            }());
            exports_1("CampaignComponent", CampaignComponent);
        }
    }
});
//# sourceMappingURL=campaign.component.js.map