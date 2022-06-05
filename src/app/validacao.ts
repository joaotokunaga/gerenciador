import { FormControl, FormGroup } from "@angular/forms"

export class Validacao {

    static confirmaSenha(group: FormGroup): any {
        if (group.get('senha')!.value == group.get('confirmaSenha')!.value) return null
        return {
            naoConfirma: true
        }
    }
}
