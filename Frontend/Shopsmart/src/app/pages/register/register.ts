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

  goToLogin() {
    this.router.navigate(['/']);
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    // Estructuramos el payload asignando el rol 'CLIENTE' por defecto
    const usuario = {
      ...this.registerForm.value,
      rol: 'CLIENTE'
    };

    // 💡 CORRECCIÓN DE PUERTO: Apuntamos al Microservicio de Usuarios (8082)
    this.http.post('http://localhost:8082/api/usuarios', usuario).subscribe({
      next: () => {
        this.loading = false;
        alert('🎉 ¡Cuenta creada correctamente! Bienvenido a ShopSmart.');
        
        // 🚀 REDIRECCIÓN AUTOMÁTICA: Mandamos al usuario directo al catálogo
        this.router.navigate(['/catalogo']);
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        this.loading = false;
        alert('❌ Error al registrar el usuario. Asegúrate de que el puerto 8082 esté encendido.');
      }
    });
  }
}