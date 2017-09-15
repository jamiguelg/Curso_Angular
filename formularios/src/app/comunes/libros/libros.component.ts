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
  public libros: Array<string>;
  ngOnInit() {
        this.libros = this.servicioLibros.getLibros('españoles');
  }

}
