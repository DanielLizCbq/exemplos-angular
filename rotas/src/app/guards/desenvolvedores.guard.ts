import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DesenvolvedoresGuard implements CanActivateChild {
  
  	canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      if(state.url.includes('editar')){
        //alert('Usuário sem Permissão!');
        //return false;
      } 

      return true;
    }

}
