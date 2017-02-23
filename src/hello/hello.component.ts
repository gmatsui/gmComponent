import { Component } from '@angular/core';

let template = `<h1>{{title}}</h1>`;

let styles = `
h1 {
  color: red;
}`;

@Component({
    selector: 'gm-hello',
    template: template,
    styles: [styles]
})
export class HelloComponent {

    title: String = "Hello World!!!"

}