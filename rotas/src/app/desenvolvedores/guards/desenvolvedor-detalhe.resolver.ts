import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Desenvolvedor } from './../desenvolvedor';
import { DesenvolvedoresService } from './../desenvolvedores.service';

@Injectable()
export class DesenvolvedorDetalheResolver implements Resolve<Desenvolvedor> {
    constructor(private desenvolvedoresService: DesenvolvedoresService) {}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            let id = route.params['id'];
            //console.log(this.desenvolvedoresService.getDesenvolvedor(id));
            return this.desenvolvedoresService.getDesenvolvedor(id);
    }
 
}