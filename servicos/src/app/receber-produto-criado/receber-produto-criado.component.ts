import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './../produtos/produtos.service';

@Component({
  selector: 'app-receber-produto-criado',
  templateUrl: './receber-produto-criado.component.html',
  styleUrls: ['./receber-produto-criado.component.css']
})
export class ReceberProdutoCriadoComponent implements OnInit {

  produto: string;

  constructor(private produtosServices: ProdutosService) { }

  ngOnInit() {
    this.produtosServices.emitirProdutoCriado.subscribe(
      produtoCriado => this.produto = produtoCriado 
    );
  }

}
