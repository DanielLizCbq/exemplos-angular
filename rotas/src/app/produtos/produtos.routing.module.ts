import { ModuleWithProviders, NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './produtos.component';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';

const produtosRoutes: Routes = [
    { path: '', component: ProdutosComponent, canActivate: [AuthGuard] },
    { path:'naoEncontrado', component: ProdutoNaoEncontradoComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ProdutoDetalheComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(produtosRoutes)],
    exports: [RouterModule]
})
export class ProdutosRoutingModule{

}