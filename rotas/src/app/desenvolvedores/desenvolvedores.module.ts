import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DesenvolvedoresComponent } from './desenvolvedores.component';
import { DesenvolvedoresFormComponent } from './desenvolvedores-form/desenvolvedores-form.component';
import { DesenvolvedoresDetalheComponent } from './desenvolvedores-detalhe/desenvolvedores-detalhe.component';
import { DesenvolvedoresRoutingModule } from './desenvolvedores.routing.module';
import { DesenvolvedoresService } from './desenvolvedores.service';
import { DesenvolvedoresDeactivateGuard } from './../guards/desenvolvedores-deactivate.guard';
import { DesenvolvedorDetalheResolver } from './guards/desenvolvedor-detalhe.resolver';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        DesenvolvedoresRoutingModule
    ],
    exports: [],
    declarations: [
        DesenvolvedoresComponent, 
        DesenvolvedoresFormComponent, 
        DesenvolvedoresDetalheComponent
    ],
    providers: [
        DesenvolvedoresService,
        DesenvolvedoresDeactivateGuard,
        DesenvolvedorDetalheResolver
    ],
})
export class DesenvolvedoresModule { }
