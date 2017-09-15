import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  private tituloPadre:string;
  public mostrarComponente: boolean;

  constructor() { }

  ngOnInit() {
    this.tituloPadre = 'Título del hijo';
  }

  borraTitulo() {
    this.tituloPadre = '';
  }
}
