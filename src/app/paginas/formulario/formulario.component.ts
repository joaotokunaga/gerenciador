import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario } from 'src/app/formulario';
import { Validacao } from 'src/app/validacao';
import { StorageService } from 'src/app/storage.service';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	formCadastro!: FormGroup
	cadastrados: Array<any> = []

	constructor(private formBuilder: FormBuilder, private storageService: StorageService) { }

	ngOnInit(): void {
		this.createForm(new Formulario())
		this.cadastrados = this.storageService.getDatabase()
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
		this.storageService.adiciona(this.formCadastro.value)
		this.cadastrados = this.storageService.getDatabase()
	}

	deletar(index: number) {
		this.storageService.remove(index)
		this.cadastrados = this.storageService.getDatabase()
	}
}
