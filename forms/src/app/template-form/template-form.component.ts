import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form){
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res).subscribe(dados => {
      console.log(dados);
      form.form.reset();
    });
  }

  constructor( private http: Http ) { }

  ngOnInit() {
  }

  consultaCEP(cep, form){
    console.log(cep);

    cep = cep.replace(/\D/g, '');
    console.log(cep);
    if(cep !=""){
      var validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)){

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados, form));

      }

    }
  }

  populaDadosForm(dados,form){
    /*form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: form.value.endereco.numero,
        complemento:dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento:dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

}
