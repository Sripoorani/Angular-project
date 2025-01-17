import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './passwordValidator';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent {
  accountForm !: FormGroup ;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '', 
        [
          Validators.required, // Phone number is required
          Validators.pattern(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/) // Phone number pattern
        ]
      ],
      password: ['', [Validators.required, passwordValidator()]],
     
    });
  }

  

  onSubmit(): void {
    console.log(this.accountForm.value)
    if (this.accountForm.invalid) {
      return;
    }
    

    this.isSubmitting = true;
    const formData = this.accountForm.value;

  
    this.http.post('https://dummyjson.com/users/add', formData).subscribe(
      (response) => {
        console.log('User created successfully:', response);
      },
      (error) => {
        console.error('Failed to create user:', error);
        this.isSubmitting = false;
      }
    );
  }
}