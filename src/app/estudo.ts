import { Bloco } from './bloco';

export class Estudo {
	id?: number
	blocoId?: number = 0
	tempo: string = ""
	data: string = ""
	questoesRealizadas?: number
	questoesAcertadas?: number
	conteudo: string = ""
	rodada: number = 0
}
