import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(private httpClient: HttpClient) {
	}

	getUsuarios(): Observable<Usuario[]> {
		return this.httpClient.get<Usuario[]>('http://localhost:3000/usuarios')
	}
}
