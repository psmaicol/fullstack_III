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

  // 💡 Este método es el que llama tu (ngSubmit)="login()" del HTML
  login() {
    // Si el usuario ingresa datos inválidos (ej: email sin @), no enviamos nada
    if (this.loginForm.invalid) {
      alert('Por favor, ingresa un correo y contraseña válidos.');
      return;
    }

    this.loading = true;

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

  goToRegister() {
    this.router.navigate(['/register']);
  }

}