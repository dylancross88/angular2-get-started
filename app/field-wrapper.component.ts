import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  moduleId: module.id,
  selector: 'field-wrapper',
  templateUrl: 'field-wrapper.component.html'
})
export class FieldWrapperComponent {
  @Input() control: FormControl;
  @Input() labelText: string;

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService
          .getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}