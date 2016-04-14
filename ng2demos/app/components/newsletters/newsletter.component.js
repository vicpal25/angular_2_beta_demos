System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Newsletter;
    return {
        setters:[],
        execute: function() {
            class Newsletter {
                constructor(name, source) {
                    this.name = name;
                    this.source = source;
                    this.descr = this.name + ' ' + this.source;
                }
            }
            exports_1("Newsletter", Newsletter);
        }
    }
});
//# sourceMappingURL=newsletter.component.js.map