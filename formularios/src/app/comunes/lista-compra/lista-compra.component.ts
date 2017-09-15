import { Component, OnInit } from '@angular/core';

  interface Tarea {
    selected: boolean;
    nombre: string;
  }

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})

export class ListaCompraComponent implements OnInit {


  public mostrarComponente: boolean;

  public listaTareas: Array<Tarea> = [];
  public nuevaTarea: Tarea;
  constructor() { }

  ngOnInit() {
    this.nuevaTarea = {selected: false, nombre: ''};
  }

  addTarea()  {
    this.listaTareas.push(this.nuevaTarea);
    this.nuevaTarea = {selected: false, nombre: ''};
  }

  deleteTarea(id) {
    this.listaTareas.splice(id, 1);
  }
}
