import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild } from '@angular/router';

import { DesenvolvedoresComponent } from './desenvolvedores.component';
import { DesenvolvedoresDetalheComponent } from './desenvolvedores-detalhe/desenvolvedores-detalhe.component';
import { DesenvolvedoresFormComponent } from './desenvolvedores-form/desenvolvedores-form.component';
import { DesenvolvedoresGuard } from '../guards/desenvolvedores.guard';
import { DesenvolvedoresDeactivateGuard } from '../guards/desenvolvedores-deactivate.guard';
import { DesenvolvedorDetalheResolver } from './guards/desenvolvedor-detalhe.resolver';

const desenvolvedoresRoutes = [
    {path: '', component: DesenvolvedoresComponent, 
    CanActivateChild: [DesenvolvedoresGuard],
     children: [
        {path: 'novo', component: DesenvolvedoresFormComponent},
        {path: ':id', component: DesenvolvedoresDetalheComponent,
            resolve: { desenvolvedor : DesenvolvedorDetalheResolver} },
        {path: ':id/editar', component: DesenvolvedoresFormComponent,
            canDeactivate: [DesenvolvedoresDeactivateGuard] }
    ]},
    
];

@NgModule({
    imports: [  
        RouterModule.forChild(desenvolvedoresRoutes)
    ],
    exports: [RouterModule]
})

export class DesenvolvedoresRoutingModule{

}