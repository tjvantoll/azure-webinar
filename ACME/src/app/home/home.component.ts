import { Component, OnInit } from "@angular/core";
import * as geolocation from "nativescript-geolocation";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Accuracy } from "tns-core-modules/ui/enums";

import { HomeService } from "./home.service";
import { WeatherService } from "../weather/weather.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    city = "";
    summary = "";
    image = "";
    currentTemperature = "";
    humidity = "";
    windSpeed = "";
    visibility = "";
    
    processing = true;

    constructor(private homeService: HomeService, private weatherService: WeatherService) {
    }

    ngOnInit(): void {
        /*
        this.homeService.hitEndpoint().subscribe(
            (data) => {
                console.log(data);
            }
        )
        */
        geolocation.enableLocationRequest();
        geolocation.getCurrentLocation({
            desiredAccuracy: Accuracy.high
        }).then((location) => {
            this.weatherService.get(location.latitude, location.longitude).subscribe((data) => {
                this.processWeatherData(data);
                this.processing = false;
            });
        });
    }

    processWeatherData(data) {
        this.city = data.name;
        this.summary = data.weather[0].main;
        this.setImage(data.weather[0].description);

        const weather = data.main;
        this.currentTemperature = Math.round(weather.temp).toString() + "°";
        this.humidity = "humidity: " + weather.humidity.toString() + "%";
        this.windSpeed = "wind: " + data.wind.speed.toString() + " mph";
        const visibilityMiles = Math.round(data.visibility / 1609.344);
        this.visibility = "visibility: " + visibilityMiles + " mi";
    }

    setImage(icon) {
        console.log(icon);
        if (
            icon.includes("rain") ||
            icon.includes("thunderstorm") ||
            icon.includes("drizzle")
        ) {
            this.image = "~/images/rainy.png";
        } else if (icon.includes("clouds")) {
            this.image = "~/images/cloudy.png";
        } else if (
            icon.includes("snow") ||
            icon.includes("sleet") ||
            icon.includes("mist") ||
            icon.includes("drizzle") ||
            icon.includes("haze")
        ) {
            this.image = "~/images/foggy.png";
        } else if (icon.includes("clear")) {
            this.image = "~/images/sunny.png";
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
