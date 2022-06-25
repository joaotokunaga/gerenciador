import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function tempoValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		let tempo = control.value.split(":")
		let valido = false

		let h = parseInt(tempo[0])
		let m = parseInt(tempo[1])
		if ((h == 0 && m > 0 && m < 60) || (h > 0 && m >= 0 && m < 60))
			valido = true

		return !valido ? { tempo: { value: control.value } } : null
	}
}