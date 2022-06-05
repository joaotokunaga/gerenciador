import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';
import { Formulario } from 'src/app/formulario';
import { Validacao } from 'src/app/validacao';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCadastro!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Formulario())
  }

  createForm(formulario: Formulario) {
    this.formCadastro = this.formBuilder.group(
      {
        nome: [formulario.nome, [Validators.required, Validators.pattern('^[a-záàâãéèêíïóôõöúçñ ]+$')]],
        email: [formulario.email, [Validators.required, Validators.email]],
        senha: [formulario.senha, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        confirmaSenha: [formulario.confirmaSenha, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        comentarios: [formulario.comentarios]
      },
      { validator: Validacao.confirmaSenha })
  }

  onSubmit() {
    console.log(this.formCadastro.get('senha')?.errors);
  }

}
