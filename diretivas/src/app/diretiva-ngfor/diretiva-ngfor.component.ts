import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  itensL: string[] = ['Ision 4000','Ision 3000', 'Ision 3000R'];

  constructor() { }

  ngOnInit() {
  }

}
