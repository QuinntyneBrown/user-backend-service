import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppEditFormComponent } from "./app-edit-form.component";
import { AppListComponent } from "./app-list.component";
import { OneColumnLayoutComponent } from "./one-column-layout.component";
import { PageHeaderComponent } from "./page-header.component";
import { SideNavComponent } from "./side-nav.component";
import { UserEditFormComponent } from "./user-edit-form.component";
import { UserListComponent } from "./user-list.component";

const declarables = [
    AppEditFormComponent,
    AppListComponent,
    OneColumnLayoutComponent,
    PageHeaderComponent,
    SideNavComponent,
    UserEditFormComponent,
    UserListComponent
];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [declarables],
    declarations: [declarables]
})
export class ComponentsModule { }
