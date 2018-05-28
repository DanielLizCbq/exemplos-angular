import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoNaoEncontradoComponent } from './produtos/produto-nao-encontrado/produto-nao-encontrado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'login', component: LoginComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);