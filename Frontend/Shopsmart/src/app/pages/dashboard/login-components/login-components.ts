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
  selector: 'app-login-components',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-components.html',
  styleUrls: ['./login-components.scss']
})
export class LoginComponents {

  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
login() {

  console.log('FUNCIONA');
  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    return;


  }

  this.loading = true;

  this.http.post(
    'http://localhost:8084/usuario/login',
    this.loginForm.value
  ).subscribe({

    next: (resp: any) => {

      this.loading = false;

      localStorage.setItem(
        'usuario',
        JSON.stringify(resp)
      );

      alert('Login correcto');

      this.router.navigate(['/inicio']);

    },

    error: (err) => {

      console.log(err);

      this.loading = false;

      alert('Correo o contraseña incorrectos');

    }

  });

}

  goToRegister() {
    this.router.navigate(['/register']);
  }
  
  

}