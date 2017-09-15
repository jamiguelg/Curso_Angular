import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent, NoticiaComponent, SelectComponent],
  exports: [
    CabeceraComponent, PieComponent, FormularioComponent, IdeasComponent, NoticiaComponent, SelectComponent
  ]

})
export class ComunesModule { }
