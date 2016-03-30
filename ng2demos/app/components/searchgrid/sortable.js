System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sortable;
    return {
        setters:[],
        execute: function() {
            Sortable = (function () {
                function Sortable() {
                    this.direction = 1;
                }
                Sortable.prototype.sort = function (key, data) {
                    var _this = this;
                    if (this.key === key) {
                        this.direction = -this.direction;
                    }
                    else {
                        this.direction = 1;
                    }
                    this.key = key;
                    data.sort(function (a, b) {
                        if (a[key] === b[key]) {
                            return 0;
                        }
                        else if (a[key] > b[key]) {
                            return _this.direction;
                        }
                        else {
                            return -_this.direction;
                        }
                    });
                };
                return Sortable;
            }());
            exports_1("Sortable", Sortable);
        }
    }
});
//# sourceMappingURL=sortable.js.map