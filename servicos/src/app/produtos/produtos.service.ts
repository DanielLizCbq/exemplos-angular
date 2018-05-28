import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable()
export class ProdutosService{

    emitirProdutoCriado = new EventEmitter<string>();
    static criouNovoProduto = new EventEmitter<string>();

    private produtos: string[] = ['Ision 4000','Ision 3000', 'Ision 3000R'];

    constructor(private logService: LogService){

    }

    getProdutos(){
        this.logService.consoleLog('Obtendo Lista de Produtos');
        return this.produtos;
    }

    addProduto(produto: string){
        this.logService.consoleLog(`Criando um novo produto: ${produto}`);
        this.produtos.push(produto);
        this.emitirProdutoCriado.emit(produto);
        ProdutosService.criouNovoProduto.emit(produto);
    }

}