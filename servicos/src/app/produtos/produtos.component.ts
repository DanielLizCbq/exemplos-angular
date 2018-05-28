import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './produtos.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutosService],
})
export class ProdutosComponent implements OnInit {

  produtos: string[] = [];

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {
    //this.produtosService = new ProdutosService();
    //this.produtosService = _produtosService;
   }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
    ProdutosService.criouNovoProduto.subscribe(
      produto => this.produtos.push (produto)
      /*function(produto){
        this.produtos.push (produto);
      }*/
    );
  }

}