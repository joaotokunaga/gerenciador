import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-rotas-com-parametro',
	templateUrl: './rotas-com-parametro.component.html',
	styleUrls: ['./rotas-com-parametro.component.css']
})
export class RotasComParametroComponent implements OnInit {

	paramUm: String = ''
	paramDois: String = ''
	respostaRecebida: String = 'Nenhuma resposta recebida ainda.'

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.paramUm = params['paramUm']
			this.paramDois = params['paramDois']
		})
	}

	receberResposta(resposta: String) {
		this.respostaRecebida = resposta
	}

}
