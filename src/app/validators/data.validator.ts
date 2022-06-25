import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function dataValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (control.value != "") {
			let data = control.value.split("/")

			let d = parseInt(data[0])
			let m = parseInt(data[1])
			let a = parseInt(data[2])

			if (isNaN(d) || isNaN(m) || isNaN(a)) return { data: { value: control.value } }

			let meses = [31, (a % 4 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

			if (d < 1 || d > 31 || m < 1 || m > 12 || a < 2022) return { data: { value: control.value } }
			if (d > meses[m - 1]) return { data: { value: control.value } }

			let hoje = new Date();
			let dataEstudo = new Date();
			dataEstudo.setFullYear(a, m - 1, d)

			if (hoje.getTime() < dataEstudo.getTime()) return { data: { value: control.value } }

			return null
		}
		return { data: { value: control.value } }
	}
}