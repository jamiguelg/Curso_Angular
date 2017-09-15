import { Libro } from './../comunes.module';
import { LibrosService } from './libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private servicioLibros: LibrosService) {


  }
  public libros: Array<Libro>;
  ngOnInit() {
    this.servicioLibros.getLibros('españoles')
    .then(libros => this.libros = libros)
    .catch(error => console.error(error));
  }

}
