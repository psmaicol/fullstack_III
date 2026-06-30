import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cupones.html',
  styleUrls: ['./cupones.scss']
})
export class Cupones {

  codigo = '';

  cupon: any = null;

  error = '';

  constructor(
    private http: HttpClient
  ) {}

  codigoCupon: string = ''; 
validarCupon() {
  if (!this.codigoCupon.trim()) {
    alert('Por favor, ingresa un código de cupón.');
    return;
  }

  const url = `http://localhost:8086/cupones/validar/${this.codigoCupon.trim()}`;

  this.http.get<any>(url).subscribe({
    next: (cuponValido) => {
      alert(`✅ ¡Cupón aplicado! Descuento del ${cuponValido.porcentajeDescuento}%`);
    },
    error: (err) => {
      console.error(err);
      alert('❌ Cupón no válido. Verifica que esté bien escrito o no haya expirado.');
    }
  });
  }
}