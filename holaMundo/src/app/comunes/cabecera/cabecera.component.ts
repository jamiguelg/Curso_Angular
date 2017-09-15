import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  numeros: string;

  constructor() { }

  ngOnInit() {
    this.numeros = "";
     for (var a = 0; a < 100; a++) {
      this.numeros += ' ' + a;
    }
  }
  

}
