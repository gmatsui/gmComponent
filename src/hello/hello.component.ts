import { Component } from '@angular/core';

@Component({
    selector: 'gm-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.less']
})
export class HelloComponent {

    title: String = "Hello World!!!"

}