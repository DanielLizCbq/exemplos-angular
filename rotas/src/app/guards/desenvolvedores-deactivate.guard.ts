import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { DesenvolvedoresFormComponent } from './../desenvolvedores/desenvolvedores-form/desenvolvedores-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class DesenvolvedoresDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
      component: IFormCanDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      return component.podeDesativar? component.podeDesativar() : true;
  }
}
