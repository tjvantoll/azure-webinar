import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    get(lat: number, long: number) {
        return this.http.get("http://localhost:7071/api/GetWeather", {
            params: {
                lat: lat.toString(),
                long: long.toString()
            }
        });
    }
}