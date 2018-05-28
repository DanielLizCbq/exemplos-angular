import { Component, OnInit } from '@angular/core';

import { DesenvolvedoresService } from './desenvolvedores.service';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {

  private desenvolvedores: any[] = [];

  constructor(private desenvolvedoresService: DesenvolvedoresService) { }

  ngOnInit() {
    this.desenvolvedores = this.desenvolvedoresService.getDesenvolvedores();
  }

}
