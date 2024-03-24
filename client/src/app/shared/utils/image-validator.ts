import { ValidatorFn } from "@angular/forms";

export function imageValidator(): ValidatorFn {
    const regex = new RegExp('^(ftp:\/\/|http:\/\/|https:\/\/|data:image\/)[^ "]+$');

    return (control) => {
        
        const isImageInvalid = control.value === '' || regex.test(control.value);
        return isImageInvalid ? null : { imageValidator: true };
    }
}