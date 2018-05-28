import { Injectable } from '@angular/core';

import { Desenvolvedor } from './desenvolvedor';

@Injectable()
export class DesenvolvedoresService {

  private desenvolvedores: Desenvolvedor[] = [
    {id: 1, nome: 'Daniel', setor: 'DES'},
    {id: 2, nome: 'Ajsda', setor: 'DES'},
    {id: 3, nome: 'Osjad', setor: 'PV'}
  ];

  getDesenvolvedores(){
    return this.desenvolvedores;
  }

  getDesenvolvedor(id){
    return this.getDesenvolvedores()[id-1];
  }

  constructor() { }

}
