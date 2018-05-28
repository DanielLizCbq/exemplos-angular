import { Injectable } from '@angular/core';

@Injectable()
export class ProdutosService {

  getProdutos(){
    return [
      {id: 1, nome: 'Ision 4000'},
      {id: 2, nome: 'GL3000'},
      {id: 3, nome: 'Active'}
    ];
  }

  getProduto(id){
    return this.getProdutos()[id-1];
  }

  constructor() { }

}
