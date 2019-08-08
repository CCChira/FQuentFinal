import { FormControl } from '@angular/forms';
export class PasswordValidator {
    static isCorrect(control: FormControl): any {
        function validPassword(password) {
 validPassword(password) {
            const rule = /^\w+$/;
            if (password) {
                if (password.length < 6) {
                    return false;
                }
 validPassword(password): any {
            const rule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}&/;
            if(rule.test(password)) {
                return true;
            } else {
                return false;
            }
            const rule2 = /[0-9]/;
            if (!rule2.test(password)) {
                return false;
            }
            const rule3 = /[a-zA-Z]/;
            if (!rule3.test(password)) {
                return false;
            }
            return true;
        }
        if (!validPassword(control.value)) {
            return{
                'Passwords must have more than six characters, alongside letters and numbers.': true
            };
        }
        return null;
    }
    /*static confirmPass(control: FormControl): any {
        if(control.value == control.root.value)
    }*/
}
