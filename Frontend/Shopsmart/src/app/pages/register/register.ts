import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  register() {

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      return;

    }

    this.loading = true;

    const usuario = {
      ...this.registerForm.value,
      rol: 'CLIENTE'
    };

    this.http.post(
      'http://localhost:8084/usuario',
      usuario
    ).subscribe({

      next: () => {

        this.loading = false;

        alert('Usuario creado correctamente');

        this.router.navigate(['/']);

      },

      error: (err) => {

        console.log(err);

        this.loading = false;

        alert('Error al registrar');

      }

    });

  }

}