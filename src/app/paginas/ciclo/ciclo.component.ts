import { RodadaComponent } from './../rodada/rodada.component';
import { Bloco } from './../../bloco';
import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/ciclo';
import { Disciplina } from 'src/app/disciplina';
import { MatDialog } from '@angular/material/dialog';
import { BlocosDetalhesComponent } from '../blocos-detalhes/blocos-detalhes.component';
import { Utils } from 'src/app/utils';
import { StoreService } from 'src/app/store.service';
import { Estudo } from 'src/app/estudo';

@Component({
	selector: 'app-ciclo',
	templateUrl: './ciclo.component.html',
	styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

	ciclo: Ciclo | undefined
	blocos: Bloco[] = []
	disciplinas: Disciplina[] = []
	estudos: Estudo[] = []
	utils: Utils = new Utils()
	rodada: number = 0

	mostrarBotaoCadastrar = true
	mostrarFormCadastro = false
	mostrarMensagemCadastrando = false

	constructor(public dialog: MatDialog, private storeService: StoreService) {

		this.storeService.disciplinas.subscribe(disciplinas => {
			this.disciplinas = disciplinas
		})

		this.storeService.ciclo.subscribe(ciclo => {
			this.ciclo = ciclo

			this.storeService.blocos.subscribe(blocos => {
				this.blocos = blocos.filter(bloco => bloco.cicloId == this.ciclo!.id)

				this.storeService.estudos.subscribe(estudos => {
					this.blocos = this.blocos.map(bloco => {
						let estudosDoBloco = []
						for (let estudo of estudos) {
							if (estudo.blocoId == bloco.id && estudo.rodada == this.ciclo?.rodadaAtual)
								estudosDoBloco.push(estudo)
						}
						bloco.statusEstudos = this.utils.calculaStatusEstudos(bloco.tempo, estudosDoBloco)
						return bloco
					})

					this.estudos = estudos
				})
			})
		})
	}

	ngOnInit(): void {
	}

	formCiclo(valor: string) {
		this.mostrarFormCadastro = false
		this.mostrarBotaoCadastrar = true
		this.mostrarMensagemCadastrando = false
		if (valor == "cadastrar") {
			this.mostrarFormCadastro = true
			this.mostrarBotaoCadastrar = false
			this.mostrarMensagemCadastrando = false
		}
		if (valor == "cadastrando") {
			this.mostrarFormCadastro = false
			this.mostrarBotaoCadastrar = false
			this.mostrarMensagemCadastrando = true
		}
	}

	getNomeDisciplina(id: any): string {
		for (let disciplina of this.disciplinas) {
			if (disciplina.id == id)
				return disciplina.nome
		}
		return ""
	}

	gerenciarRodada() {
		this.dialog.open(RodadaComponent);
	}

	abrirDetalhesBloco(bloco: Bloco) {
		bloco.disciplinaNome = this.getNomeDisciplina(bloco.disciplinaId)
		this.dialog.open(BlocosDetalhesComponent, {
			data: {
				bloco
			},
		});
	}
}
