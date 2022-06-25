import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function quantidadeAcertadasValidator(questoesRealizadas: string, questoesAcertadas: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		let qR = control.get(questoesRealizadas)?.value
		let qA = control.get(questoesAcertadas)?.value

		let valido = false

		if (qR == "" && qA == "")
			valido = true

		let qRNumber = parseInt(qR)
		let qANumber = parseInt(qA)

		if (!valido && !isNaN(qRNumber) && !isNaN(qANumber) && qRNumber >= qANumber)
			valido = true

		return !valido ? { questoesAcertadas: { value: control.value } } : null
	}
}