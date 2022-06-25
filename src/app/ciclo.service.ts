import { Ciclo } from './ciclo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CicloService {

	constructor(private httpClient: HttpClient) {
	}

	getCiclos(): Observable<Ciclo[]> {
		return this.httpClient.get<Ciclo[]>('http://localhost:3000/ciclos')
	}

	setCiclo(ciclo: Ciclo): Observable<Ciclo> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.post<Ciclo>('http://localhost:3000/ciclos', ciclo, options).pipe()
	}

	updateCiclo(ciclo: Ciclo): Observable<Ciclo> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.put<Ciclo>(`http://localhost:3000/ciclos/${ciclo.id}`, ciclo, options).pipe()
	}
}
