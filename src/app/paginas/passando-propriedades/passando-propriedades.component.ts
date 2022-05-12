import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-passando-propriedades',
	templateUrl: './passando-propriedades.component.html',
	styleUrls: ['./passando-propriedades.component.css']
})
export class PassandoPropriedadesComponent implements OnInit {

	@Input() inputDoPai: String = ''
	@Output() resposta = new EventEmitter<String>()

	constructor() { }

	ngOnInit(): void {
		this.resposta.emit('recebi aqui o param2 ' + this.inputDoPai + ' e emito essa resposta!')
	}

}
