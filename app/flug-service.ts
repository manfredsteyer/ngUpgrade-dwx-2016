export class FlugService {
	
	$http: ng.IHttpService;
	baseUrl : string;
	
	constructor($http: ng.IHttpService, baseUrl: string) {
		this.$http = $http;
		this.baseUrl = baseUrl;
	}
	
	byId(id: number) {
		
		var urlParams = {
			flightNummer: id
		};
	
		var url = this.baseUrl + '/api/flight';
		return this
			.$http
			.get(url, { params: urlParams });
		
	}
	
	save(flight) {
		
		var url = this.baseUrl + '/api/flight';
		return this.$http.post(url, flight);
		
	}
	
	suchen(von: string, nach: string) {
		
		var urlParams = {
			abflightCity: von,
			zielCity: nach
		};
	
		var url = this.baseUrl + '/api/flight';
		return this
			.$http
			.get(url, { params: urlParams })
			
		
	}
	
}