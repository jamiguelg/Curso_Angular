import { Libro } from './../comunes.module';
import { LibrosService } from './../libros/libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  public idLibro: number;
  public libro: Libro;

  constructor(private router: Router,
    activatedRoute: ActivatedRoute, private servicioLibros: LibrosService) {
      this.idLibro = activatedRoute.snapshot.params['id'];
    }

  ngOnInit() {
    this.servicioLibros.getLibro(this.idLibro)
    .then(libro => this.libro = libro)
    .catch(error => console.error(error));
  }

  volver()  {
    this.router.navigate(['/libros']);
  }

}
