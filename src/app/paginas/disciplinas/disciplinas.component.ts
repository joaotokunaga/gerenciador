import { Disciplina } from './../../disciplina';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
	selector: 'app-disciplinas',
	templateUrl: './disciplinas.component.html',
	styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

	disciplinas: Disciplina[] | undefined
	mostrarFormCadastro: boolean = false
	mostrarFormEditar: boolean = false
	mostrarBotaoCadastrar: boolean = true
	disciplinaEdit?: Disciplina | undefined

	constructor(private storeService: StoreService) { }

	ngOnInit(): void {
		this.storeService.disciplinas.subscribe(disciplinas => {
			this.disciplinas = disciplinas
		})
	}

	formDisciplina(valor: string) {
		this.mostrarFormCadastro = false
		this.mostrarFormEditar = false
		this.mostrarBotaoCadastrar = true
		if (valor == "cadastrar") {
			this.mostrarFormCadastro = true
			this.mostrarFormEditar = false
			this.mostrarBotaoCadastrar = false
		}
		if (valor == "editar") {
			this.mostrarFormEditar = true
			this.mostrarFormCadastro = false
			this.mostrarBotaoCadastrar = true
		}
	}

	editar(disciplina: Disciplina) {
		this.disciplinaEdit = disciplina
		this.formDisciplina("editar")
	}

	excluir(id: number) {
		if (confirm("Tem certeza?")) {
			this.storeService.deleteDisciplina(id)
		}
	}
}
