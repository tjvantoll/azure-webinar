import { platformNativeScriptDynamic } from "nativescript-angular/platform";
require("@proplugins/nativescript-azure-mobile-apps/client").MobileServiceClient.configureClientAuthAppDelegate();

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
