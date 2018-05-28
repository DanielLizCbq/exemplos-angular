import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { DropdownService } from './../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
    ) {

     }

  ngOnInit() {

    this.dropdownService.getEstadosBr().subscribe(dados => {
      this.estados = dados;
      console.log(dados);
    });
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required], //Validators.minLength(3), Validators.maxLength(20)
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null],
        estado: [null]
      })
    });

  }
  onSubmit(){
    console.log(this.formulario);

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res).subscribe(dados => {
        console.log(dados);
        // Reseta formulario
        this.resetar();
      },
      (error: any)=> alert('Erro'));
    }else{
      console.log('Form Invalido');
      this.verificaValidacoesForm(this.formulario);
      
    }

  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar(){
    this.formulario.reset();
  }

  consultaCEP(){
    let cep = this.formulario.get('endereco.cep').value;
    console.log(cep);

    cep = cep.replace(/\D/g, '');
    console.log(cep);
    if(cep !=""){
      var validaCep = /^[0-9]{8}$/;
      if(validaCep.test(cep)){
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados));

      }

    }
  }

  populaDadosForm(dados){
    this.formulario.patchValue({
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
