import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ProdutosService } from '../produtos.service';


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  produto: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private produtosService: ProdutosService) {
    //this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.produto = this.produtosService.getProduto(this.id);
      } 
    );

    if(this.produto == null){
      this.router.navigate(['/produtos/naoEncontrado']);
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
