import { Usuario } from './../../usuario';
import { StorageService } from './../../storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	cadastrados: Array<any> = []
	apiURLbase = "http://localhost:3000/usuarios"

	constructor(private httpClient: HttpClient, private storageService: StorageService) { }

	ngOnInit(): void {

	}

	carregar() {
		this.storageService.getUsuarios().subscribe(usuarios => {
			if (!usuarios || usuarios.length == 0) {
				console.log("Sem usuários cadastrados.")
				return
			}
			this.cadastrados = usuarios
		})
	}
}
