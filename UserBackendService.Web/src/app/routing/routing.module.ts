import { Routes, RouterModule } from '@angular/router';

import {
    HomePageComponent,
    AppEditPageComponent,
    AppListPageComponent,
    UserEditPageComponent,
    UserListPageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: AppListPageComponent
    },
    {
        path: 'app',
        component: AppEditPageComponent
    },
    {
        path: 'apps',
        component: AppListPageComponent
    },
    {
        path: 'user',
        component: UserEditPageComponent
    },
    {
        path: 'users',
        component: UserListPageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    HomePageComponent,
    AppEditPageComponent,
    AppListPageComponent,
    UserEditPageComponent,
    UserListPageComponent
];

