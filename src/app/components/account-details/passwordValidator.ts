import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    const isValid =
      hasUpperCase && hasLowerCase && hasNumber && hasSymbol && isValidLength;

 
    return !isValid
      ? {
          passwordStrength: {
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSymbol,
            isValidLength,
          },
        }
      : null;
  };
}
