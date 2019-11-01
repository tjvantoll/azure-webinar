import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";
import { WeatherService } from "../weather/weather.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService,
        WeatherService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
