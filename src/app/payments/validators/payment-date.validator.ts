import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function paymentDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value as string) || ''
    const [dateString, time] = value.split(' ')
    const [day, month, year] = dateString.split('/')
    const dateInstance = new Date(`${year}-${month}-${day} ${time}`)
    const isValid = !isNaN(dateInstance.getTime())

    if (isValid) return null

    return {
      paymentDate: {
        value,
      },
    }
  }
}
