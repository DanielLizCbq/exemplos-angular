import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ProdutosService } from '../produtos/produtos.service';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProdutosComponent],
  providers: [ProdutosService]
})
export class ProdutosModule { }
