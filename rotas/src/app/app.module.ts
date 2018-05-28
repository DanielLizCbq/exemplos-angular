import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
//import { DesenvolvedoresModule } from './desenvolvedores/desenvolvedores.module';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './guards/auth.guard';
import { ProdutosGuard } from './guards/produtos.guard';
import { DesenvolvedoresGuard } from './guards/desenvolvedores.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { ProdutosModule } from './produtos/produtos.module';
//import { routing } from './app.routing';
/*import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosService } from './produtos/produtos.service';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoNaoEncontradoComponent } from './produtos/produto-nao-encontrado/produto-nao-encontrado.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
    /*ProdutosComponent,
    ProdutoDetalheComponent,
    ProdutoNaoEncontradoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //DesenvolvedoresModule
    //ProdutosModule,
    //routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProdutosGuard,
    DesenvolvedoresGuard
    //ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
