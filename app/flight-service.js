System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlightService;
    return {
        setters:[],
        execute: function() {
            FlightService = (function () {
                function FlightService($http, baseUrl) {
                    this.$http = $http;
                    this.baseUrl = baseUrl;
                }
                FlightService.prototype.byId = function (id) {
                    var urlParams = {
                        flightNummer: id
                    };
                    var url = this.baseUrl + '/api/flight';
                    return this
                        .$http
                        .get(url, { params: urlParams });
                };
                FlightService.prototype.save = function (flight) {
                    var url = this.baseUrl + '/api/flight';
                    return this.$http.post(url, flight);
                };
                FlightService.prototype.suchen = function (von, nach) {
                    var urlParams = {
                        abflightCity: von,
                        zielCity: nach
                    };
                    var url = this.baseUrl + '/api/flight';
                    return this
                        .$http
                        .get(url, { params: urlParams });
                };
                return FlightService;
            }());
            exports_1("FlightService", FlightService);
        }
    }
});
//# sourceMappingURL=flight-service.js.map