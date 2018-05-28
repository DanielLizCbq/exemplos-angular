import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {

  ok: boolean = false;

  onOkClick(){
    this.ok = !this.ok;
  }

  constructor() { }

  ngOnInit() {
  }

}
