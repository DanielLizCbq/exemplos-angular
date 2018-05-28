import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { DesenvolvedoresService } from '../desenvolvedores.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-desenvolvedores-form',
  templateUrl: './desenvolvedores-form.component.html',
  styleUrls: ['./desenvolvedores-form.component.css']
})
export class DesenvolvedoresFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  desenvolvedor: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private desenvolvedoresService: DesenvolvedoresService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.desenvolvedor = this.desenvolvedoresService.getDesenvolvedor(id)
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeDesativar(){
    if(this.formMudou){
      return confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

}