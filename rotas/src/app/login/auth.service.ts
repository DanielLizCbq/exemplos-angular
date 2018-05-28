import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {


  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'Daniel' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
    return this.usuarioAutenticado;
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  constructor(private router: Router) { }

}
