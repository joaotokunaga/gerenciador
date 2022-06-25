import { Bloco } from './bloco';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BlocoService {

	constructor(private httpClient: HttpClient) {
	}

	getBlocos(): Observable<Bloco[]> {
		return this.httpClient.get<Bloco[]>('http://localhost:3000/blocos')
	}

	setBloco(bloco: Bloco): Observable<Bloco> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		})
		let options = { headers: headers };
		return this.httpClient.post<Bloco>('http://localhost:3000/blocos', bloco, options).pipe()
	}
}
