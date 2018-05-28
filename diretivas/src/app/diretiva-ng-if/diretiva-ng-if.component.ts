import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent implements OnInit {

  itensL: string[] = ['Ision 4000','Ision 3000', 'Ision 3000R'];

  mostrarItensL: boolean = false;

  onMostrarItens(){
    this.mostrarItensL = !this.mostrarItensL;
  }

  constructor() { }

  ngOnInit() {
  }

}
