System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Column;
    return {
        setters:[],
        execute: function() {
            class Column {
                constructor(name, descr) {
                    this.name = name;
                    this.descr = descr;
                }
            }
            exports_1("Column", Column);
        }
    }
});
//# sourceMappingURL=column.js.map