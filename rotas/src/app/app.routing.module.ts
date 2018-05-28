import { ModuleWithProviders, NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

//import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
//import { ProdutosComponent } from './produtos/produtos.component';
//import { ProdutoNaoEncontradoComponent } from './produtos/produto-nao-encontrado/produto-nao-encontrado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProdutosGuard } from './guards/produtos.guard';
import { DesenvolvedoresGuard } from './guards/desenvolvedores.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    {path: 'produtos',  loadChildren: 'app/produtos/produtos.module#ProdutosModule' ,
     canActivate: [AuthGuard], canActivateChild: [ProdutosGuard], 
     canLoad: [AuthGuard] },
    {path: 'desenvolvedores',  loadChildren: 'app/desenvolvedores/desenvolvedores.module#DesenvolvedoresModule',
     canActivate: [AuthGuard], 
     canLoad: [AuthGuard]},//, canActivateChild: [DesenvolvedoresGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
    //{ path: 'produtos', component: ProdutosComponent },
    //{ path: 'produto/:id', component: ProdutoDetalheComponent },
    //{ path:'naoEncontrado', component: ProdutoNaoEncontradoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule{

}