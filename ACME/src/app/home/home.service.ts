import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    hitEndpoint() {
        return this.http.get("http://localhost:7071/api/HelloWorld");
    }
}