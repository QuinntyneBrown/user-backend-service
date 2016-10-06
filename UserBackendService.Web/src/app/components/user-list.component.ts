import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../models";

@Component({
    template: require("./user-list.component.html"),
    styles: [require("./user-list.component.scss")],
    selector: "user-list"
})
export class UserListComponent {     
    @Input() public entities: Array<User> = [];
    @Output() onDelete: EventEmitter<{ value: User }> = new EventEmitter<{ value: User }>();
    @Output() onSelect: EventEmitter<{ value: User }> = new EventEmitter<{ value: User }>();
    @Output() onEdit: EventEmitter<{ value: User }> = new EventEmitter<{ value: User }>();
}
