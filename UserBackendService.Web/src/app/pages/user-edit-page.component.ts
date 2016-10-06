import { Component, Input, OnInit } from "@angular/core";
import { UserActions } from "../actions";
import { Router, ActivatedRoute } from "@angular/router";
import { AppStore } from "../store";

@Component({
    template: require("./user-edit-page.component.html"),
    styles: [require("./user-edit-page.component.scss")],
    selector: "user-edit-page"
})
export class UserEditPageComponent { 
    constructor(private _userActions: UserActions, 
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._userActions.getById({ id: this._activatedRoute.snapshot.params["id"] });
    }

    public get entity$() {
        return this._store.userById$(this._activatedRoute.snapshot.params["id"]);
    }

    public onSubmit($event: any) {
        this._userActions.add({
            id: $event.value.id,
            name: $event.value.name
        });

        setTimeout(() => { this._router.navigate(["/users"]); }, 0);
        
    }

    public onCancel() {
        setTimeout(() => { this._router.navigate(["/users"]); }, 0);
    }
}
