import { Component } from "@angular/core";
import { AuthenticationProvider } from "@proplugins/nativescript-azure-mobile-apps/user";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { LoginService } from "./login.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private page: Page, private loginService: LoginService, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    logInWithAD() {
        this.loginService.login(AuthenticationProvider.AzureActiveDirectory)
    }

    logInWithGoogle() {
        this.loginService.login(AuthenticationProvider.Google)
            .then(() => {
                this.routerExtensions.navigate(["/home"]);
            })
    }
}

