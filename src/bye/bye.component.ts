import { Component } from '@angular/core';

let template = `<h1>{{title}}</h1>`;

let styles = `
h1 {
  color: green;
}`;

@Component({
    selector: 'gm-bye',
    template: template,
    styles: [styles]
})
export class ByeComponent {

    title: String = "Byeee!!"

}