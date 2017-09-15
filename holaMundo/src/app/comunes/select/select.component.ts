import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public claro:boolean;
  public print:boolean;
  public impresora:string;
  public provinciaSeleccionada;

  public provincias;

  constructor() { }

  ngOnInit() {
    this.claro = false;
    this.print = true;
    this.impresora = "HP";
    this.provincias = [
          {id:28, nombre:"Madrid"},
          {id:3, nombre:"Alicante"},
          {id:8, nombre:"Barcelona"},
          {id:34, nombre:"Palencia"},
          {id:50, nombre:"Zaragoza"}    
        ]
    this.provinciaSeleccionada = this.provincias[2];
  }

}
