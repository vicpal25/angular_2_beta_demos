System.register(['angular2/platform/browser', './app.component', 'angularfire2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, angularfire2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [angularfire2_1.FIREBASE_PROVIDERS, angularfire2_1.defaultFirebase('https://todolistng2.firebaseio.com/')]);
        }
    }
});
//# sourceMappingURL=main.js.map