import { Injectable } from '@angular/core';
import { Formulario } from './formulario';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	database: Array<any> = []

	constructor() {
		this.lerStorage()
	}

	adiciona(item: any) {
		this.database.push(item)
		this.gravarStorage()
	}

	remove(index: number) {
		this.database.splice(index, 1)
		this.gravarStorage()
	}

	getDatabase() {
		return this.database
	}

	lerStorage() {
		let database = localStorage.getItem("database")
		if (database == null)
			database = JSON.stringify([])
		this.database = JSON.parse(database)
	}

	gravarStorage() {
		localStorage.setItem("database", JSON.stringify(this.database))
	}
}
