import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { AppService } from "./app.service";
import { UserService } from "./user.service";

const providers = [
    AppService,
    UserService
];

@NgModule({
    imports: [CommonModule, HttpModule],
	providers: providers
})
export class ServicesModule { }
