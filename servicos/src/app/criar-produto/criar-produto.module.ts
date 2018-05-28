import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ProdutosService } from '../produtos/produtos.service';
import { CriarProdutoComponent } from './criar-produto.component';
import { ReceberProdutoCriadoComponent } from '../receber-produto-criado/receber-produto-criado.component';

@NgModule({
  declarations: [
    CriarProdutoComponent,
    ReceberProdutoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarProdutoComponent],
  providers: [ProdutosService]
})
export class CriarProdutoModule { }
