import {FormControl, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
///check if introduced passwords work
this.matching_passwords_group = new FormGroup({
    password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')

    ])),
    confirm_password: new FormControl('', Validators.required)
}, (formGroup: FormGroup) => {
    return this.PasswordValidator.areNotEqual(formGroup);
});
