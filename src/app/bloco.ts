import { StatusEstudos } from './statusestudos';
import { Estudo } from './estudo';

export class Bloco {
	id?: number
	tempo: string = ""
	disciplinaId?: number
	disciplinaNome?: string
	cicloId: number = 0
	statusEstudos?: StatusEstudos
}
