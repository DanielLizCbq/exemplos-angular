import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  constructor() {
    this.log('constructor');
   }

  ngOnInit() {
    this.log('ngOnInit');
  }

  private log (msg: string){
    console.log(msg);
  }

}
