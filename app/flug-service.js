System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlugService;
    return {
        setters:[],
        execute: function() {
            FlugService = (function () {
                function FlugService($http, baseUrl) {
                    this.$http = $http;
                    this.baseUrl = baseUrl;
                }
                FlugService.prototype.byId = function (id) {
                    var urlParams = {
                        flightNummer: id
                    };
                    var url = this.baseUrl + '/api/flight';
                    return this
                        .$http
                        .get(url, { params: urlParams });
                };
                FlugService.prototype.save = function (flight) {
                    var url = this.baseUrl + '/api/flight';
                    return this.$http.post(url, flight);
                };
                FlugService.prototype.suchen = function (von, nach) {
                    var urlParams = {
                        abflightCity: von,
                        zielCity: nach
                    };
                    var url = this.baseUrl + '/api/flight';
                    return this
                        .$http
                        .get(url, { params: urlParams });
                };
                return FlugService;
            }());
            exports_1("FlugService", FlugService);
        }
    }
});
//# sourceMappingURL=flug-service.js.map