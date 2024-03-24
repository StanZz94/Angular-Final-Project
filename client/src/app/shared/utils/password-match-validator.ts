import { ValidatorFn } from "@angular/forms";

export function passwordsMatchValidator(password: string, repeatPassword: string): ValidatorFn {

    return  (control) => {
        
        const firstPass = control.get(password);
        const secondPass = control.get(repeatPassword); 
        const isMathing = firstPass?.value == secondPass?.value;

        return isMathing ? null : {passwordsMatchValidator: true};
    }
}