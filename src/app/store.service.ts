import { Disciplina } from './disciplina';
import { Estudo } from './estudo';
import { Bloco } from './bloco';
import { Ciclo } from './ciclo';

import { Injectable } from '@angular/core';

import { CicloService } from './ciclo.service';
import { DisciplinaService } from './disciplina.service';
import { BlocoService } from './bloco.service';
import { EstudoService } from './estudo.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	disciplinasSource = new BehaviorSubject<Disciplina[]>([])
	disciplinas = this.disciplinasSource.asObservable()

	estudosSource = new BehaviorSubject<Estudo[]>([])
	estudos = this.estudosSource.asObservable()

	cicloSource = new BehaviorSubject<Ciclo>(new Ciclo())
	ciclo = this.cicloSource.asObservable()

	blocosSource = new BehaviorSubject<Bloco[]>([])
	blocos = this.blocosSource.asObservable()

	constructor(private cicloService: CicloService, private disciplinaService: DisciplinaService, private blocoService: BlocoService, private estudoService: EstudoService) {
		this.getDisciplinas()
		this.getCiclos()
		this.getBlocos()
		this.getEstudos()
	}

	/**
	 * 
	 * DISCIPLINAS
	 * 
	 */

	getDisciplinas() {
		this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
			this.disciplinasSource.next(disciplinas)
		})
	}

	setDisciplina(disciplina: Disciplina) {
		this.disciplinaService.setDisciplina(disciplina).subscribe(disciplina => {
			let disciplinas = this.disciplinasSource.value
			disciplinas.push(disciplina)
			this.disciplinasSource.next(disciplinas)
		})
	}

	updateDisciplina(disciplina: Disciplina) {
		this.disciplinaService.updateDisciplina(disciplina).subscribe(disciplina => {
			let disciplinas = this.disciplinasSource.value
			disciplinas = disciplinas.map(d => (d.id == disciplina.id) ? disciplina : d)
			this.disciplinasSource.next(disciplinas)
		})
	}

	deleteDisciplina(id: number) {
		this.disciplinaService.deleteDisciplina(id).subscribe(disciplina => {
			let disciplinas = this.disciplinasSource.value
			disciplinas = disciplinas.filter(disciplina => disciplina.id != id)
			this.disciplinasSource.next(disciplinas)
		})
	}

	/**
	 * 
	 * CICLO
	 * 
	 */

	getCiclos() {
		this.cicloService.getCiclos().subscribe(ciclos => {
			this.cicloSource.next(ciclos[ciclos.length - 1])
		})
	}

	setCiclo(ciclo: Ciclo) {
		this.cicloService.setCiclo(ciclo).subscribe(ciclo => {
			this.cicloSource.next(ciclo)
		})
	}

	updateCiclo(ciclo: Ciclo) {
		this.cicloService.updateCiclo(ciclo).subscribe(ciclo => {
			this.cicloSource.next(ciclo)
		})
	}

	/**
	 * 
	 * BLOCOS
	 * 
	 */

	getBlocos() {
		this.blocoService.getBlocos().subscribe(blocos => {
			this.blocosSource.next(blocos)
		})
	}

	setBloco(bloco: Bloco) {
		this.blocoService.setBloco(bloco).subscribe(bloco => {
			let blocos = this.blocosSource.value
			blocos.push(bloco)
			this.blocosSource.next(blocos)
		})
	}

	/**
	 * 
	 * ESTUDOS
	 * 
	 */

	getEstudos() {
		this.estudoService.getEstudos().subscribe(estudos => {
			this.estudosSource.next(estudos)
		})
	}

	setEstudo(estudo: Estudo) {
		this.estudoService.setEstudo(estudo).subscribe(estudo => {
			let estudos = this.estudosSource.value
			estudos.push(estudo)
			this.estudosSource.next(estudos)
		})
	}

	updateEstudo(estudo: Estudo) {
		this.estudoService.updateEstudo(estudo).subscribe(estudo => {
			let estudos = this.estudosSource.value
			estudos = estudos.map(d => (d.id == estudo.id) ? estudo : d)
			this.estudosSource.next(estudos)
		})
	}

	deleteEstudo(id: number) {
		this.estudoService.deleteEstudo(id).subscribe(estudo => {
			let estudos = this.estudosSource.value
			estudos = estudos.filter(estudo => estudo.id != id)
			this.estudosSource.next(estudos)
		})
	}
}
