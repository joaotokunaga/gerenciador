import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
	selector: 'app-rodada',
	templateUrl: './rodada.component.html',
	styleUrls: ['./rodada.component.css']
})
export class RodadaComponent implements OnInit {

	textoRodadaCriada: string = ""
	textoRodadaMudada: string = ""
	rodadaAMudar: number = 1
	rodadaAtual: number = 1
	rodadaUltima: number = 1

	constructor(private storeService: StoreService) { }

	ngOnInit(): void {
		this.rodadaAtual = this.storeService.cicloSource.value.rodadaAtual
		this.rodadaUltima = this.storeService.cicloSource.value.rodadaUltima
	}

	criarRodada() {
		let ciclo = this.storeService.cicloSource.value
		ciclo.rodadaUltima++
		this.rodadaUltima = ciclo.rodadaUltima
		this.storeService.updateCiclo(ciclo)
		this.textoRodadaCriada = "Rodada criada com sucesso!"
		setTimeout(() => {
			this.textoRodadaCriada = ""
		}, 3500)
	}

	mudarRodada() {
		let rodada = this.rodadaAMudar
		if (rodada <= 0 || !Number.isInteger(rodada) || rodada > this.rodadaUltima) {
			this.textoRodadaMudada = "Rodada inválida."
			setTimeout(() => {
				this.textoRodadaMudada = ""
			}, 2000)
			return
		}
		let ciclo = this.storeService.cicloSource.value
		ciclo.rodadaAtual = rodada
		this.rodadaAtual = ciclo.rodadaAtual
		this.storeService.updateCiclo(ciclo)
		this.textoRodadaMudada = `A rodada atual agora é a ${this.rodadaAtual}.`
		setTimeout(() => {
			this.textoRodadaMudada = ""
		}, 2000)
	}
}
