import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario } from 'src/app/formulario';
import { Validacao } from 'src/app/validacao';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	formCadastro!: FormGroup
	cadastrados: Array<any> = []
	apiURLbase = "http://localhost:3000/usuarios"

	constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

	ngOnInit(): void {
		this.createForm(new Formulario())
		this.getAll()
	}

	createForm(formulario: Formulario) {
		this.formCadastro = this.formBuilder.group(
			{
				nome: [formulario.nome, [Validators.required, Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)]],
				email: [formulario.email, [Validators.required, Validators.email]],
				senha: [formulario.senha, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
				confirmaSenha: [formulario.confirmaSenha, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
				comentarios: [formulario.comentarios]
			},
			{ validator: Validacao.confirmaSenha })
	}

	onSubmit() {
		const formulario = new Formulario()
		formulario.nome = this.formCadastro.value.nome
		formulario.email = this.formCadastro.value.email
		formulario.senha = this.formCadastro.value.senha
		formulario.comentarios = this.formCadastro.value.comentarios
		delete formulario['confirmaSenha']
		fetch(this.apiURLbase, {
			method: 'POST',
			body: JSON.stringify(formulario),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		}).then((resposta) => this.getAll())
	}

	getAll() {
		const promise = new Promise<void>((resolve, reject) => {
			this.httpClient.get<Formulario[]>(this.apiURLbase).subscribe({
				next: (res: any) => {
					this.cadastrados = res.map((res: any) => {
						const formulario = new Formulario()
						formulario.id = res.id
						formulario.nome = res.nome
						formulario.email = res.email
						formulario.senha = res.senha
						formulario.comentarios = res.comentarios
						return formulario
					})
					return this.cadastrados
					resolve()
				},
				error: (err: any) => {
					reject(err)
				},
				complete: () => {
					// console.log('Concluído')
				},
			})
		})
	}

	deletar(id: number) {
		fetch(`${this.apiURLbase}/${id}`, {
			method: 'DELETE'
		}).then((resposta) => this.getAll())
	}
}
