import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição',
    resp:{
      usuario: {
        nome:'Teste'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}