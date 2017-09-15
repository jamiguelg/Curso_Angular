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



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent,
   NoticiaComponent, SelectComponent, PadreComponent, HijoComponent, ListaCompraComponent, ItemCompraComponent, LibrosComponent],
  exports: [
    CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent,
     NoticiaComponent, SelectComponent, PadreComponent, HijoComponent, ListaCompraComponent,
     ItemCompraComponent, LibrosComponent
  ],
  providers: [
    LibrosService
  ]

})
export class ComunesModule { }
