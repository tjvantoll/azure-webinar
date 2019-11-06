import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    get(lat: number, long: number) {
        const url = "http://api.openweathermap.org/data/2.5/weather?APPID=870fdc992bf1fbdda05fbb6151503cc2" +
            "&units=imperial&lat=" + lat + "&lon=" + long;
        return this.http.get(url);
    }
}
