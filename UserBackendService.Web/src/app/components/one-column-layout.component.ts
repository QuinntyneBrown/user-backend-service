import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./one-column-layout.component.html"),
    styles: [require("./one-column-layout.component.scss")],
    selector: "one-column-layout",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneColumnLayoutComponent implements OnInit { 
    ngOnInit() {

    }
}
