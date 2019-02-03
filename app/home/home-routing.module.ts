import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            { path: "", redirectTo: "home-main", pathMatch: "full" },
            { path: "home-main", loadChildren: "./home/homeMain/homeMain.module#HomeMainModule" },
            { path: "profile", loadChildren: "./home/profile/profile.module#ProfileModule" },
            { path: "messages", loadChildren: "./home/messages/messages.module#MessagesModule" },
            { path: "settings", loadChildren: "./home/settings/settings.module#SettingsModule" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
