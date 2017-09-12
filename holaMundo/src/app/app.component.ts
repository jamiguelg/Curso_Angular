import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';
  empresa = 'Indra';
  numeros = '';
  
  constructor() {
    for (var a = 0; a < 100; a++) {
      this.numeros += a;
    }
  }  //i = 0;


  
}
