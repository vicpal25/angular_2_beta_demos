System.register(['angular2/core', './mock-campaigns'], function(exports_1, context_1) {
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
    var core_1, mock_campaigns_1;
    var NewsletterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_campaigns_1_1) {
                mock_campaigns_1 = mock_campaigns_1_1;
            }],
        execute: function() {
            NewsletterService = (function () {
                function NewsletterService() {
                }
                NewsletterService.prototype.getNewsletters = function () {
                    return Promise.resolve(mock_campaigns_1.CAMPAIGNS);
                };
                NewsletterService.prototype.getNewslettersSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_campaigns_1.CAMPAIGNS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                NewsletterService.prototype.getNewsletter = function (id) {
                    return Promise.resolve(mock_campaigns_1.CAMPAIGNS).then(function (newsletters) { return newsletters.filter(function (Newsletter) { return newsletter.id === id; })[0]; });
                };
                NewsletterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NewsletterService);
                return NewsletterService;
            }());
            exports_1("NewsletterService", NewsletterService);
        }
    }
});
//# sourceMappingURL=newsletter.service.js.map