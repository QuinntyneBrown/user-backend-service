import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserService } from "../services";
import { AppState, AppStore } from "../store";
import { USER_ADD_SUCCESS, USER_GET_SUCCESS, USER_REMOVE_SUCCESS } from "../constants";
import { User } from "../models";
import { Observable } from "rxjs";
import { guid } from "ng2-utilities";

@Injectable()
export class UserActions {
    constructor(private _userService: UserService, private _store: AppStore) { }

    public add(user: User) {
        const newGuid = guid();
        this._userService.add(user)
            .subscribe(user => {
                this._store.dispatch({
                    type: USER_ADD_SUCCESS,
                    payload: user
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._userService.get()
            .subscribe(users => {
                this._store.dispatch({
                    type: USER_GET_SUCCESS,
                    payload: users
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._userService.remove({ id: options.id })
            .subscribe(user => {
                this._store.dispatch({
                    type: USER_REMOVE_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._userService.getById({ id: options.id })
            .subscribe(user => {
                this._store.dispatch({
                    type: USER_GET_SUCCESS,
                    payload: [user]
                });
                return true;
            });
    }
}
