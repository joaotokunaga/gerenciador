import { Disciplina } from './disciplina';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DisciplinaService {

	constructor(private httpClient: HttpClient) {
	}

	getDisciplinas(): Observable<Disciplina[]> {
		return this.httpClient.get<Disciplina[]>('http://localhost:3000/disciplinas')
	}

	setDisciplina(disciplina: Disciplina): Observable<Disciplina> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.post<Disciplina>('http://localhost:3000/disciplinas', disciplina, options).pipe()
	}

	updateDisciplina(disciplina: Disciplina): Observable<Disciplina> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.put<Disciplina>(`http://localhost:3000/disciplinas/${disciplina.id}`, disciplina, options).pipe()
	}

	deleteDisciplina(id: number): Observable<Disciplina> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.delete<Disciplina>(`http://localhost:3000/disciplinas/${id}`, options).pipe()
	}
}
