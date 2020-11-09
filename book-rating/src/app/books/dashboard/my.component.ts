import { Component, Input } from '@angular/core';

// Content projection
@Component({
  selector: 'br-my',
  template: `<div [ngClass]="class">
    <strong>Projection</strong>
    <ng-content></ng-content>
  </div>`,
})
export class MyComponent {

  @Input()
  class: string;

}
