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

  validarCupon() {

    this.error = '';

    this.cupon = null;

    this.http.get(
      `http://localhost:8084/cupones/validar/${this.codigo}`
    ).subscribe({

      next: (resp: any) => {

        console.log(resp);

        this.cupon = resp;

      },

      error: (err) => {

        console.log(err);

        this.error = 'Cupón no válido';

      }

    });

  }

}