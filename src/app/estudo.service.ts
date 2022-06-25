import { Estudo } from './estudo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EstudoService {

	constructor(private httpClient: HttpClient) {
	}

	getEstudos(): Observable<Estudo[]> {
		return this.httpClient.get<Estudo[]>('http://localhost:3000/estudos')
	}

	setEstudo(estudo: Estudo): Observable<Estudo> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.post<Estudo>('http://localhost:3000/estudos', estudo, options).pipe()
	}

	setEstudos(estudos: Estudo[]): Observable<Estudo[]> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.post<Estudo[]>('http://localhost:3000/estudos', estudos, options).pipe()
	}

	updateEstudo(estudo: Estudo): Observable<Estudo> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.put<Estudo>(`http://localhost:3000/estudos/${estudo.id}`, estudo, options).pipe()
	}

	deleteEstudo(id: number): Observable<Estudo> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.delete<Estudo>(`http://localhost:3000/estudos/${id}`, options).pipe()
	}
}
