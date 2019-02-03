import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HomeMainRoutingModule } from "./homeMain-routing.module";
import { HomeMainComponent } from "./homeMain.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		HomeMainRoutingModule
	],
	declarations: [
		HomeMainComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class HomeMainModule {}