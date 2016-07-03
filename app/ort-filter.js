System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrtFilter;
    return {
        setters:[],
        execute: function() {
            OrtFilter = (function () {
                function OrtFilter() {
                }
                OrtFilter.createFilter = function ($log) {
                    // abflugOrt | ort:'short':'de'
                    // Anmerkung: lang wird nicht verwendet
                    return function (value, format, lang) {
                        var short, long;
                        switch (value) {
                            case "Hamburg":
                                short = "HAM";
                                long = "Hamburg Fuhlsbüttel";
                                break;
                            case "Graz":
                                short = "GRZ";
                                long = "Graz Thalerhof";
                                break;
                            default:
                                short = 'ROM';
                                long = 'Rom';
                        }
                        if (format == 'short') {
                            return short;
                        }
                        return long;
                    };
                };
                return OrtFilter;
            }());
            exports_1("OrtFilter", OrtFilter);
        }
    }
});
//# sourceMappingURL=ort-filter.js.map