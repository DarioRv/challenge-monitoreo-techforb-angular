import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../interfaces/credentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css',
})
export class SignInFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  hidePassword = true;
  isSubmitting = false;
  error = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  get credentials() {
    const credentials: Credentials = {
      email: this.email.value,
      password: this.password.value,
    };

    return credentials;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.authService.signIn(this.credentials).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.form.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (message) => {
        this.isSubmitting = false;
        this.error = message;
      },
    });
  }
}
