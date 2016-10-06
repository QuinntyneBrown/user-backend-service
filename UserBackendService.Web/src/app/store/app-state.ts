import { App, User } from "../models";

export interface AppState {
    apps: Array<App>;
    users: Array<User>;
	currentUser: any;
    isLoggedIn: boolean;
    token: string;
}
