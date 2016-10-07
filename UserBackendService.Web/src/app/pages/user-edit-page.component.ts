import { Component, Input, OnInit } from "@angular/core";
import { UserActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./user-edit-page.component.html"),
    styles: [require("./user-edit-page.component.scss")],
    selector: "user-edit-page"
})
export class UserEditPageComponent implements OnInit { 
    constructor(private _userActions: UserActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        if (this._activatedRoute.snapshot.params["userId"])
            this._userActions.getById({ id: this._activatedRoute.snapshot.params["userId"] });
    }

    public get entity$() {
        return this._store.userById$(this._activatedRoute.snapshot.params["userId"]);
    }

    public onSubmit($event: any) {
        this._userActions.add({
            id: $event.value.id,
            appId: this._activatedRoute.snapshot.params["appId"],
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/users"]); }, 0);
        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/users"]); }, 0);
    }
}
