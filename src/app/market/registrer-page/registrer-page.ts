import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export function canadaValidator(control: AbstractControl): ValidationErrors | null {

  return control.value === 'Canada'
    ? null
    : { notCanada: true };
}

@Component({
  selector: 'app-register-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./registrer-page.html',
  styleUrl: './registrer-page.css'
})
export class RegistrerPage {
   private fb = inject(FormBuilder);

  private router = inject(Router);
  provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Northwest Territories',
    'Nunavut',
    'Yukon'
  ];

  registerForm;

  constructor(
  ) {

    this.registerForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[A-Za-z\s]+$/)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ]
      ],

      dob: ['', Validators.required],

      address: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9\s]+$/)
        ]
      ],

      province: ['', Validators.required],

      country: [
        '',
        [
          Validators.required,
          canadaValidator
        ]
      ],

      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {

     console.log('BUTTON WORKS');

  console.log(this.registerForm.value);

  this.router.navigate(['/products']);
}
}