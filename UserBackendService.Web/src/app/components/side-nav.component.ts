import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./side-nav.component.html"),
    styles: [require("./side-nav.component.scss")],
    selector: "side-nav",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit { 
    ngOnInit() {

    }
}
