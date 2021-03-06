import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { UserActions } from "../actions";
import { AppStore } from "../store";
import { ActivatedRoute, Router } from "@angular/router";   

@Component({
    template: require("./user-list-page.component.html"),
    styles: [require("./user-list-page.component.scss")],
    selector: "user-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPageComponent implements OnInit {
    constructor(
        private _userActions: UserActions,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore,
        private _router: Router) { }

    ngOnInit() {
        this._userActions.get(); 
    }
    
    public get appId() {
        return this._activatedRoute.snapshot.params["appId"];
    }
    
}
