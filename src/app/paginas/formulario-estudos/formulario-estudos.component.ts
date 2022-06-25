import { Bloco } from './../../bloco';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudo } from 'src/app/estudo';
import { tempoValidator } from 'src/app/validators/tempo.validator'
import { dataValidator } from 'src/app/validators/data.validator'
import { quantidadeAcertadasValidator } from 'src/app/validators/questoes.validator';
import { StoreService } from 'src/app/store.service';

@Component({
	selector: 'app-formulario-estudos',
	templateUrl: './formulario-estudos.component.html',
	styleUrls: ['./formulario-estudos.component.css']
})
export class FormularioEstudosComponent implements OnInit, AfterContentChecked {

	@Input() bloco: Bloco | undefined
	@Input() estudo?: Estudo | undefined
	@Output() eventoFecharFormulario = new EventEmitter()
	@Output() eventoNovoEstudo = new EventEmitter()

	buttonText = "Cadastrar"

	formulario = new FormGroup({
		"tempo": new FormControl("", [Validators.required, Validators.pattern(/^([0-9]{1,2}:[0-9]{2})$/gi), tempoValidator()]),
		"data": new FormControl("", [Validators.required, dataValidator()]),
		"questoesRealizadas": new FormControl("", [Validators.pattern(/^([0-9])+$/i)]),
		"questoesAcertadas": new FormControl("", [Validators.pattern(/^([0-9])+$/i)]),
		"conteudo": new FormControl("", [Validators.required])
	},
		[quantidadeAcertadasValidator("questoesRealizadas", "questoesAcertadas")]
	)

	constructor(private storeService: StoreService, private changeDetector: ChangeDetectorRef) {

	}

	ngOnInit(): void {
		if (this.estudo != undefined) {
			this.buttonText = "Editar"
			this.formulario = new FormGroup({
				"id": new FormControl(this.estudo.id, [Validators.pattern(/^([0-9])+$/i)]),
				"tempo": new FormControl(this.estudo.tempo.substring(0, this.estudo.tempo.length - 1), [Validators.required, Validators.pattern(/^([0-9]{1,2}:[0-9]{2})$/gi), tempoValidator()]),
				"data": new FormControl(this.estudo.data, [Validators.required, dataValidator()]),
				"questoesRealizadas": new FormControl((this.estudo.questoesRealizadas == null) ? "" : this.estudo.questoesRealizadas, [Validators.pattern(/^([0-9])+$/i)]),
				"questoesAcertadas": new FormControl((this.estudo.questoesAcertadas == null) ? "" : this.estudo.questoesAcertadas, [Validators.pattern(/^([0-9])+$/i)]),
				"conteudo": new FormControl(this.estudo.conteudo, [Validators.required])
			},
				[quantidadeAcertadasValidator("questoesRealizadas", "questoesAcertadas")]
			)
		}
	}

	cadastrarEstudos() {
		let estudo = new Estudo()

		estudo.tempo = this.formulario.get("tempo")?.value + "h"
		estudo.data = this.formulario.get("data")?.value
		estudo.questoesRealizadas = parseInt(this.formulario.get("questoesRealizadas")?.value)
		estudo.questoesAcertadas = parseInt(this.formulario.get("questoesAcertadas")?.value)
		estudo.conteudo = this.formulario.get("conteudo")?.value
		estudo.blocoId = this.bloco?.id
		estudo.rodada = this.storeService.cicloSource.value.rodadaAtual

		if (this.formulario?.value.id == undefined)
			this.storeService.setEstudo(estudo)
		else {
			estudo.id = this.estudo!.id
			this.storeService.updateEstudo(estudo)
		}

		this.eventoNovoEstudo.emit(estudo)
		this.eventoFecharFormulario.emit(true)
	}

	fecharFormulario() {
		this.eventoFecharFormulario.emit(true)
	}

	ngAfterContentChecked(): void {
		this.changeDetector.detectChanges();
	}

	get tempo() { return this.formulario.get("tempo") }
	get data() { return this.formulario.get("data") }
	get conteudo() { return this.formulario.get("conteudo") }
	get questoesRealizadas() { return this.formulario.get("questoesRealizadas") }
	get questoesAcertadas() { return this.formulario.get("questoesAcertadas") }
}
