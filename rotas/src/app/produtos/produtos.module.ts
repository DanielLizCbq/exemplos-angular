import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { ProdutosRoutingModule } from './produtos.routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { ProdutosService } from './produtos.service';

@NgModule({
    imports: [
        CommonModule,
        ProdutosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        ProdutosComponent,
        ProdutoDetalheComponent,
        ProdutoNaoEncontradoComponent
    ],
    providers: [ProdutosService],
})
export class ProdutosModule { 

}
