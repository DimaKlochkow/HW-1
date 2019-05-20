import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
var a = false;
console.assert(a);

console.clear();

console.log(a);

console.error(a);

console.warn(a);