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

<<<<<<< HEAD
  console.log('FUNCIONA');
  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    return;
=======
  // 💡 Este método es el que llama tu (ngSubmit)="login()" del HTML
  login() {
    // Si el usuario ingresa datos inválidos (ej: email sin @), no enviamos nada
    if (this.loginForm.invalid) {
      alert('Por favor, ingresa un correo y contraseña válidos.');
      return;
    }

    this.loading = true;
>>>>>>> 963bd65e9a440c6e10849ac1456f9ac11105bce7

    // Capturamos el email y password estructurados por el FormGroup
    const credenciales = this.loginForm.value;

    // Petición POST directa al backend de usuarios
    this.http.post('http://localhost:8082/api/usuarios/login', credenciales).subscribe({
      next: (respuesta: any) => {
        this.loading = false;
        alert('¡Inicio de sesión exitoso! Bienvenido a ShopSmart.');
        
        // 🚀 Redirección automática instantánea hacia tu catálogo de productos
        this.router.navigate(['/catalogo']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error en login:', err);
        alert('❌ Credenciales inválidas. Verifica tu correo o contraseña.');
      }
    });
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