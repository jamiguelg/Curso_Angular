import { Component, OnInit } from '@angular/core';

interface Provincia {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public pasos: number;
  public claro: boolean;
  public print: boolean;
  public impresoraSeleccionada: string;
  public provinciaSeleccionada: Provincia;
  public mostrarComponente: boolean;

  public provincias: Array<Provincia>;
  public impresoras: Array<string>;

  constructor() { }

  ngOnInit() {
    this.mostrarComponente = true;
    this.pasos = 0;
    this.claro = false;
    this.print = true;
    this.impresoras = [
      'Epson',
      'HP',
      'Lexmark',
      'Genérica'
    ];
    this.provincias = [
          {id: 28, nombre: 'Madrid'},
          {id: 3, nombre: 'Alicante'},
          {id: 8, nombre: 'Barcelona'},
          {id: 34, nombre: 'Palencia'},
          {id: 50, nombre: 'Zaragoza'}
        ];
    this.provinciaSeleccionada = this.provincias[2];
  }

}
