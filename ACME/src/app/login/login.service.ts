import { Injectable } from "@angular/core";
import { MobileServiceClient } from "@proplugins/nativescript-azure-mobile-apps/client";
import { AuthenticationProvider } from "@proplugins/nativescript-azure-mobile-apps/user";

import { User } from "./user.model";

@Injectable()
export class LoginService {
    client;
    static user = new User();

    constructor() {
        this.client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
    }

    getUser() {
        return LoginService.user;
    }

    login(provider: AuthenticationProvider) {
        return new Promise((resolve, reject) => {
            this.client.login(provider, "x-msauth-tns-azure-sample").then((userData) => {
                userData.getProviderCredentials().then((result) => {
                    LoginService.user.setName(result.name);
                    LoginService.user.setPicture(result.claims.picture);
                    resolve();
                });
            }, (e) => {
                console.log("Error Logging in!", e);
                reject();
            });
        });
    }
}