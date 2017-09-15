import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';
  empresa = 'Indra';

  public tituloApp: string;
  constructor() {
    this.tituloApp = 'Curso Angular';
  }


}
