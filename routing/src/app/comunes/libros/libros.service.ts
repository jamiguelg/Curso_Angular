import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  constructor() { }

  getLibros(titulo: string): Promise<string[]> {
    return Promise.resolve([
      'El silencio de la ciudad blanca',
      'Los ritos del agua',
      'El guardián invisible'
    ]);
  }

}
