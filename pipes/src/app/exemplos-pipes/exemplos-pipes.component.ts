import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  produto: any = {
    nome: 'Ision 4000 TeSte Iushd',
    maxPortas: 600,
    maxTDM: 448,
    slots: 14,
    preco: 50000.5,
    nQq: 8.50448,
    data: new Date(2018,0,30)
  };

  filterType='nome';

  produtos: string[] = ['Ision 4000', 'GL3000', 'Ision 3000R'];

  produtosJson = [
    {
      'nome':'Ision 4000',
      'qtd': 20
    },
    {
      'nome':'GL3000',
      'qtd': 30
    },
    {
      'nome':'Ision 3000R',
      'qtd': 15
    }
  ];

  filtro: string;
  filtroAux: string;

  obterProdutos(){
    if(this.produtos.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === ''){
      return this.produtos;
    }

    return this.produtos.filter((v) => { 
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });

  }

  addProduto(valor){
    this.produtos.push(valor);
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor Assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor Assíncrono 2');


  constructor() { }

  ngOnInit() {
  }

  obterProdutosObject(){
    console.log(this.filterType);
    if(this.filtro && this.filtro !== ''){
      return this.produtosJson.filter((v) => { 
        console.log(v);
        console.log(v[this.filterType]);
        if(v[this.filterType].toString().toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
        }
        return false;
      });
    }else {
      return this.produtosJson;
    }
  }

}
