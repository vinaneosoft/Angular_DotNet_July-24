import { AbstractControl, ValidationErrors } from "@angular/forms"

export class CustomValidators {

    static valueMatch(control: AbstractControl): ValidationErrors | null{
        /*An error map with the match property if the validation check fails, otherwise null. */
        const price=control.get("bookPrice")?.value
        const cprice=control.get("bookConfirmPrice")?.value
      //  console.log(price);
       // console.log(cprice);
        if(price!=cprice){
            return {match: true}
        }
        else
            return null
    }
}
