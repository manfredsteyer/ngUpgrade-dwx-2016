System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GDateValidatorFactory;
    return {
        setters:[],
        execute: function() {
            // app.directive('gdate', GDateValidatorFactory.create);
            // app.directive('gdate', function() { return { }});
            GDateValidatorFactory = (function () {
                function GDateValidatorFactory() {
                }
                GDateValidatorFactory.create = function () {
                    // <input ng-model="..." gdata="d">
                    return {
                        require: 'ngModel',
                        link: function (scope, elm, attrs, ctrl) {
                            // Den Wert des Attributes auslesen
                            // Beim Einsatz von <input gdate="d" ...> wird
                            // hier somit "d" ausgelesen ...
                            var fmt = attrs.gdate;
                            ctrl.$parsers.unshift(function (viewValue) {
                                var d = Globalize.parseDate(viewValue);
                                if (d) {
                                    ctrl.$setValidity('gdate', true);
                                    return d;
                                }
                                else {
                                    ctrl.$setValidity('gdate', false);
                                    return undefined;
                                }
                            });
                            ctrl.$formatters.unshift(function (value) {
                                if (!value)
                                    return value;
                                if (typeof value == "string") {
                                    value = new Date(value);
                                }
                                var formatted = Globalize.format(value, fmt);
                                return formatted;
                            });
                        }
                    };
                };
                ;
                return GDateValidatorFactory;
            }());
            exports_1("GDateValidatorFactory", GDateValidatorFactory);
        }
    }
});
//# sourceMappingURL=gdate.js.map