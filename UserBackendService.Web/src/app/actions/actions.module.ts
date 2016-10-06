import { NgModule } from '@angular/core';
import { AppActions } from "./app.actions";
import { UserActions } from "./user.actions";

const providers = [
    AppActions,
    UserActions
];

@NgModule({
	providers: providers
})
export class ActionsModule { }
