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
        path: 'app/:id',
        component: AppEditPageComponent
    },
    {
        path: 'apps',
        component: AppListPageComponent
    },
    {
        path: 'app/:appId/user',
        component: UserEditPageComponent
    },
    {
        path: 'app/:appId/users',
        component: UserListPageComponent
    },
    {
        path: 'app/:appId/user/:userId',
        component: UserEditPageComponent
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

