import { Bloco } from './bloco';
import { Estudo } from './estudo';
import { StatusEstudos } from './statusestudos';

export class Utils {
	converteStringTempo(stringTempo: string) {
		let arrayTempo = stringTempo.substring(0, stringTempo.length - 1).split(":")
		return [parseInt(arrayTempo[0]), parseInt(arrayTempo[1])]
	}

	formataTempo(tempo: number[]): number[] {
		let h = tempo[0]
		let m = tempo[1]
		h += Math.floor(tempo[1] / 60)
		m = tempo[1] % 60
		return [h, m]
	}

	calculaStatusEstudos(tempo: string, estudos: Estudo[]): StatusEstudos {
		let statusEstudos = new StatusEstudos()

		let utils = new Utils()
		let tempoBloco = utils.converteStringTempo(tempo)
		let hBloco = tempoBloco[0]
		let mBloco = tempoBloco[1]

		let tempoEstudado: number[] = [0, 0]
		for (let estudo of estudos) {
			let calculado = utils.converteStringTempo(estudo.tempo)
			tempoEstudado[0] += calculado[0]
			tempoEstudado[1] += calculado[1]
		}
		tempoEstudado = utils.formataTempo(tempoEstudado)
		let hEstudado = tempoEstudado[0]
		let mEstudado = tempoEstudado[1]

		if (hEstudado == 0 && mEstudado == 0) return statusEstudos
		else {
			if (hEstudado > hBloco || (hEstudado == hBloco && mEstudado >= mBloco)) {
				statusEstudos.codigo = 2
				statusEstudos.totalEstudado = `${hEstudado}:${(mEstudado >= 10) ? mEstudado : `0${mEstudado}`}h`
				statusEstudos.mensagem = "Estudos concluídos."
				return statusEstudos
			}
			if ((hEstudado == hBloco && mEstudado < mBloco) || (hEstudado < hBloco)) {
				statusEstudos.codigo = 1
				statusEstudos.totalEstudado = `${hEstudado}:${(mEstudado >= 10) ? mEstudado : `0${mEstudado}`}h`
				statusEstudos.mensagem = "Estudos incompletos."
				return statusEstudos
			}
		}
		return statusEstudos
	}

	retornaClasseCodigo(codigo: number) {
		return (codigo == 0) ? 'has-text-danger' : (codigo == 1) ? 'has-text-grey-dark' : 'has-text-link'
	}

	sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
}
