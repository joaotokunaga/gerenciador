import { Ciclo } from 'src/app/ciclo';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from 'src/app/disciplina';
import { Bloco } from 'src/app/bloco';
import { Utils } from 'src/app/utils';
import { StoreService } from 'src/app/store.service';

@Component({
	selector: 'app-formulario-ciclo',
	templateUrl: './formulario-ciclo.component.html',
	styleUrls: ['./formulario-ciclo.component.css']
})
export class FormularioCicloComponent implements OnInit {

	@Output() fechaFormulario: EventEmitter<string> = new EventEmitter(true)
	@Output() cadastradosNovosBlocos: EventEmitter<Bloco[]> = new EventEmitter()
	@Output() cadastradoNovoCiclo: EventEmitter<Ciclo> = new EventEmitter()
	@Output() mostrarBotoesNovamente: EventEmitter<boolean> = new EventEmitter()

	formulario = new FormGroup({
		"nome": new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(/^([a-zà-ú0-9 ])+$/i)]),
		"blocos": new FormArray([])
	})

	grupoBlocos = new FormGroup({
		"tempo": new FormControl("", [Validators.required]),
		"disciplinaNome": new FormControl("", [Validators.required])
	})

	disciplinas: Disciplina[] | undefined
	ciclo: Ciclo | undefined
	totalHorasCiclo: string | undefined
	textoCadastrando = ""
	blocoAtual: Bloco | undefined
	utils = new Utils()

	constructor(private storeService: StoreService) { }

	ngOnInit(): void {
		this.storeService.disciplinas.subscribe(disciplinas => {
			this.disciplinas = disciplinas
		})
	}

	async cadastrarCiclo() {
		if (confirm("Cadastrar um ciclo implica na inativação do ciclo atual. Deseja continuar?")) {
			this.fechaFormulario.emit("cadastrando")
			let ciclo = new Ciclo()
			ciclo.nome = this.formulario.get("nome")?.value

			this.storeService.setCiclo(ciclo)

			await this.utils.sleep(1000)

			this.ciclo = this.storeService.cicloSource.value

			await this.utils.sleep(1000)

			for (let blocoGroup of this.blocos.controls) {
				let tempo = blocoGroup.get("tempo")?.value
				let disciplinaNome = blocoGroup.get("disciplinaNome")?.value

				let bloco = new Bloco()
				bloco.tempo = tempo
				bloco.disciplinaId = this.disciplinas!.find(disciplina => disciplina.nome.toLowerCase() == disciplinaNome.toLowerCase())?.id
				bloco.cicloId = this.ciclo!.id!
				delete bloco.disciplinaNome

				this.storeService.setBloco(bloco)

				await this.utils.sleep(1000)
			}
		}
	}

	recalculaHoraCiclo() {
		let utils = new Utils()
		let totalHoras = 0
		let totalMinutos = 0
		for (let blocoGroup of this.blocos.controls) {
			let [horas, minutos] = utils.converteStringTempo(blocoGroup.get("tempo")?.value)
			totalHoras += horas
			totalMinutos += minutos
		}
		totalHoras += Math.trunc(totalMinutos / 60)
		totalMinutos = totalMinutos % 60
		this.totalHorasCiclo = `${totalHoras}:${(totalMinutos < 10) ? `0${totalMinutos}` : totalMinutos}h`
	}

	deletarBloco(i: number) {
		this.blocos.controls.splice(i, 1)
		this.recalculaHoraCiclo()
	}

	novoBloco() {
		this.grupoBlocos = new FormGroup({
			"tempo": new FormControl("1:00h", [Validators.required]),
			"disciplinaNome": new FormControl(this.disciplinas![0].nome, [Validators.required])
		})
		this.blocos.push(this.grupoBlocos)
		this.recalculaHoraCiclo()
	}

	fecharFormulario(modo: string) {
		this.fechaFormulario.emit(modo)
	}

	get nome() { return this.formulario?.get("nome") }
	get blocos() { return this.formulario?.get("blocos") as FormArray }
}
