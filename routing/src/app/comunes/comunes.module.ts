import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SelectComponent } from './select/select.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ItemCompraComponent } from './item-compra/item-compra.component';
import { LibrosService } from './libros/libros.service';
import { LibrosComponent } from './libros/libros.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { routing } from './app.routing';
import { DetalleLibroComponent } from './libros/detalle-libro.component';
import { HomeComponent } from './home/home.component';
import { GoogleBooksComponent } from './google-books/google-books.component';


export interface Libro {
  titulo: string;
  id: number;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule, routing, HttpModule, BrowserModule, JsonpModule
  ],
  declarations: [CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent,
   NoticiaComponent, SelectComponent, PadreComponent, HijoComponent, ListaCompraComponent, 
   ItemCompraComponent, LibrosComponent, NavegacionComponent, DetalleLibroComponent, HomeComponent, GoogleBooksComponent],
  exports: [
    CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent,
     NoticiaComponent, SelectComponent, PadreComponent, HijoComponent, ListaCompraComponent,
     ItemCompraComponent, LibrosComponent, NavegacionComponent, RouterModule, DetalleLibroComponent,
     HomeComponent, GoogleBooksComponent
  ],
  providers: [
    LibrosService
  ]

})
export class ComunesModule { }


