import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriarProdutoModule } from './criar-produto/criar-produto.module';
import { ProdutosModule } from './produtos/produtos.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarProdutoModule,
    ProdutosModule
  ],
  providers: [
    LogService
    //ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
