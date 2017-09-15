import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


  interface Tarea {
    selected: boolean;
    nombre: string;
  }

@Component({
  selector: 'app-item-compra',
  templateUrl: './item-compra.component.html',
  styleUrls: ['./item-compra.component.css']
})
export class ItemCompraComponent implements OnInit {

  @Output()
  borrar = new EventEmitter<number>();

  @Input()
  private tarea: Tarea;

  @Input()
  private id: number;

  constructor() { }

  ngOnInit() {
  }

  deleteTarea() {
    this.borrar.emit();
  }

}
