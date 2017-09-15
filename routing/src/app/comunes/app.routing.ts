import { HomeComponent } from './home/home.component';
import { DetalleLibroComponent } from './libros/detalle-libro.component';
import { LibrosComponent } from './libros/libros.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { PadreComponent } from './padre/padre.component';
import { SelectComponent } from './select/select.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes = [
{ path: 'home', component: HomeComponent, },
{ path: 'noticia', component: NoticiaComponent, },
{ path: 'ideas', component: IdeasComponent, },
{ path: 'select', component: SelectComponent, },
{ path: 'padre', component: PadreComponent, },
{ path: 'listaCompra', component: ListaCompraComponent, },
{ path: 'libros', component: LibrosComponent, },
{ path: 'detalleLibro/:id', component: DetalleLibroComponent, },
{ path: 'googleBooks', component: GoogleBooksComponent, },

{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
