import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bloco } from 'src/app/bloco';
import { Estudo } from 'src/app/estudo';
import { StatusEstudos } from 'src/app/statusestudos';
import { StoreService } from 'src/app/store.service';
import { Utils } from 'src/app/utils';

@Component({
	selector: 'app-blocos-detalhes',
	templateUrl: './blocos-detalhes.component.html',
	styleUrls: ['./blocos-detalhes.component.css']
})
export class BlocosDetalhesComponent implements OnInit {

	estudos: Estudo[] = []
	bloco: Bloco = new Bloco()
	statusEstudos: StatusEstudos = new StatusEstudos()
	mostrarFormCadastro = false
	utils: Utils = new Utils()
	rodadaAtual = this.storeService.cicloSource.value.rodadaAtual
	estudoEdit: Estudo | undefined

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>, private storeService: StoreService) { }

	ngOnInit(): void {
		this.bloco = this.data.bloco

		this.dialogRef.updateSize('80%', '80%');

		this.storeService.estudos.subscribe(estudos => {
			this.estudos = estudos.filter(estudo => estudo.blocoId == this.bloco.id && estudo.rodada == this.storeService.cicloSource.value.rodadaAtual)

			this.statusEstudos = this.utils.calculaStatusEstudos(this.bloco.tempo, this.estudos)
		})
	}

	cadastrarEstudos() {
		this.mostrarFormCadastro = true
	}

	fecharFormulario(valor: boolean) {
		this.mostrarFormCadastro = !valor
	}

	novoEstudo(estudo: Estudo) {
		this.estudos.push(estudo)
		this.statusEstudos = this.utils.calculaStatusEstudos(this.bloco.tempo, this.estudos)

	}

	deletarEstudo(id: number) {
		if (confirm("Tem certeza?")) {
			this.storeService.deleteEstudo(id)
		}
	}

	editarEstudo(id: number) {
		this.estudoEdit = this.estudos.filter(estudo => estudo.id == id)[0]
		this.mostrarFormCadastro = true
	}
}
