import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DesenvolvedoresService } from '../desenvolvedores.service';
import { Desenvolvedor } from '../desenvolvedor';

@Component({
  selector: 'app-desenvolvedores-detalhe',
  templateUrl: './desenvolvedores-detalhe.component.html',
  styleUrls: ['./desenvolvedores-detalhe.component.css']
})
export class DesenvolvedoresDetalheComponent implements OnInit, OnDestroy {

  desenvolvedor: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private desenvolvedoresService: DesenvolvedoresService) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.desenvolvedor = this.desenvolvedoresService.getDesenvolvedor(id)
      }
    );*/
    this.inscricao = this.route.data.subscribe(
      (info: {desenvolvedor: Desenvolvedor}) => {
        this.desenvolvedor = info.desenvolvedor;
      }
    );
  }

  editarDes(){
    this.router.navigate(['/desenvolvedores', this.desenvolvedor.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
