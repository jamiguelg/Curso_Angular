import { Libro } from './../comunes.module';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

  constructor(private http: Http) { }
  public libros;
  public titulo:string;

  ngOnInit() {

  }

  cargaLibros()  {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.titulo).subscribe(
	    response => this.libros = response.json().items,
	    error => console.error(error)

    );
  }
}
