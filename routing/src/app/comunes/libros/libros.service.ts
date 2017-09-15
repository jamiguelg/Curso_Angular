
import { Libro } from './../comunes.module';
import { Injectable } from '@angular/core';


@Injectable()
export class LibrosService {
  private libros: Array<Libro> = [
      {titulo: 'El silencio de la ciudad blanca', id: 0},
      {titulo: 'Los ritos del agua', id: 1},
      {titulo: 'El guardián invisible', id: 2}
    ];
  constructor() { }


  getLibros(titulo: string): Promise<Libro[]> {
    return Promise.resolve(this.libros);
  }

  getLibro(id: number): Promise<Libro>  {
    return Promise.resolve(this.libros[id]);
  }

}
