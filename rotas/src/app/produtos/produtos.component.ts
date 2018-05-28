import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
    
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  paginaAnterior(){
    if(this.pagina > 1){
      this.router.navigate(['/produtos'], 
      { queryParams: { 'pagina': --this.pagina }});
    }
  }

  proximaPagina(){
    this.router.navigate(['/produtos'], 
      { queryParams: { 'pagina': ++this.pagina }});
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
