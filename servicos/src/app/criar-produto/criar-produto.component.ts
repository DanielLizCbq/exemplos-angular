import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './../produtos/produtos.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css'],
  providers: [ProdutosService],
})
export class CriarProdutoComponent implements OnInit {

  produtos: string[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
  }

  onAddProduto(produto: string){
    this.produtosService.addProduto(produto);
  }

}
