import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  //outputs['mudouValor']
})
export class DataBindingComponent implements OnInit {

  valorInicial = 15;
  
  onMudouValor(evento){
    console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
