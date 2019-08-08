import { FormControl } from '@angular/forms';

export class EmailValidator {
    static isCorrect(control: FormControl): any {
          function validEmail(email) {
            const emFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email) {
                return email.match(emFormat);
           // tslint:disable-next-line: no-trailing-whitespace
            } else { return false; }
        }
          if (!validEmail(control.value)) {
            return {
                'Email is either inexistent or incorrect': true
            };
        }
          return null;

  static isValid(control: FormControl): any {

    function validEmail(mail) {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(mail) {
        return mail.match(mailformat);
      } else {
        return false;
      }
    }
    if (!validEmail(control.value)) {
      return {
        'Invalid emailll address': true
      };
    }
    return null;
  }

}
