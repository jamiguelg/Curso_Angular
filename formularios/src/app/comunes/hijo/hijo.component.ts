import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Output()
  borrar = new EventEmitter<boolean>();

  @Input()
  private tituloHijo: string;
  constructor() {
    this.tituloHijo = 'titulo por defecto';
   }

  ngOnInit() {
  }

  borraHijo()  {
    this.tituloHijo = '';
  }
  borraPadre()  {
    this.borrar.emit();
  }  

}
