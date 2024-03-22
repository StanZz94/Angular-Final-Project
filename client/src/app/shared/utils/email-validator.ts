import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}');

    return (control) => {
        
        const isEmailInvalid = control.value === '' || regex.test(control.value);
        return isEmailInvalid ? null : { emailValidator: true };
    }
}