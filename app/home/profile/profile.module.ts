import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		ProfileRoutingModule
	],
	declarations: [
		ProfileComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ProfileModule { }