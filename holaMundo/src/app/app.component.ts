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
      this.numeros += ' ' + a;
    }


      var data = [{precio: 12}, {precio: 34}, {precio: 19}]; 

      data.forEach( elem => {
      if (true) {

        const iva = 1.16
        var precioFinal = elem.precio * iva
        
        console.log(`
        Oferta: 
        El precio final es ${precioFinal}`);
      }

      this.empresa =  "" + precioFinal;
      // console.log (iva)
      });

  }  //i = 0;


  
}
