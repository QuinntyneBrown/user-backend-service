import { Action } from "@ngrx/store";
import { USER_ADD_SUCCESS, USER_GET_SUCCESS, USER_REMOVE_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { User } from "../models";
import { addOrUpdate, pluckOut } from "../utilities";

export const usersReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case USER_ADD_SUCCESS:
            var entities: Array<User> = state.users;
            var entity: User = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { users: entities });

        case USER_GET_SUCCESS:
            var entities: Array<User> = state.users;
            var newOrExistingUsers: Array<User> = action.payload;
            for (let i = 0; i < newOrExistingUsers.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingUsers[i] });
            }                                    
            return Object.assign({}, state, { users: entities });

        case USER_REMOVE_SUCCESS:
            var entities: Array<User> = state.users;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { users: entities });

        default:
            return state;
    }
}

