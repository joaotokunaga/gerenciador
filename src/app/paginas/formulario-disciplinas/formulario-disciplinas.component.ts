import { StoreService } from 'src/app/store.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from 'src/app/disciplina';

@Component({
	selector: 'app-formulario-disciplinas',
	templateUrl: './formulario-disciplinas.component.html',
	styleUrls: ['./formulario-disciplinas.component.css']
})
export class FormularioDisciplinasComponent implements OnInit {

	@Output() disciplinaCadastrada: EventEmitter<Disciplina> = new EventEmitter()
	@Output() disciplinaUpdateada: EventEmitter<Disciplina> = new EventEmitter()
	@Output() fechaFormulario: EventEmitter<string> = new EventEmitter()
	@Input() disciplina?: Disciplina | undefined

	buttonText = "Cadastrar"

	formulario = new FormGroup({
		"nome": new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(/^([a-zà-ú0-9 ])+$/i)])
	})

	constructor(private storeService: StoreService) { }

	ngOnInit(): void {
		if (this.disciplina != undefined) {
			this.buttonText = "Editar"
			this.formulario = new FormGroup({
				"nome": new FormControl(this.disciplina.nome, [Validators.required, Validators.minLength(3), Validators.pattern(/^([a-zà-ú0-9 ])+$/i)]),
				"id": new FormControl(this.disciplina.id, [Validators.pattern(/^([0-9])+$/i)]),
			})
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes["disciplina"] != undefined) {
			let disciplina = changes["disciplina"]
			this.formulario.get("nome")?.setValue(disciplina.currentValue.nome)
			this.formulario.get("id")?.setValue(disciplina.currentValue.id)
		}
	}

	cadastrarDisciplina() {
		let disciplina = new Disciplina()
		disciplina.nome = this.formulario?.value.nome
		disciplina.id = this.formulario?.value.id
		if (this.formulario?.value.id == undefined)
			this.storeService.setDisciplina(disciplina)
		else
			this.storeService.updateDisciplina(disciplina)
	}

	fecharFormulario() {
		this.fechaFormulario.emit("fechar")
	}

	get nome() { return this.formulario?.get('nome') }
}
