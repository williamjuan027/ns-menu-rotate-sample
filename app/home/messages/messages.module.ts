import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesComponent } from "./messages.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		MessagesRoutingModule
	],
	declarations: [
		MessagesComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MessagesModule { }