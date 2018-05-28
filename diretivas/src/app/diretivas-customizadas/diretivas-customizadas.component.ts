import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit{ 

  itensL: string[] = ['Ision 4000','Ision 3000', 'Ision 3000R'];

  mostrarItensL: boolean = false;

  onMostrarItens(){
    this.mostrarItensL = !this.mostrarItensL;
  }

  constructor() { }

  ngOnInit() {
  }

}
