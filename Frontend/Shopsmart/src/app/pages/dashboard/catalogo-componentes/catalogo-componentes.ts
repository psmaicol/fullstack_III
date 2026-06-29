import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-componentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-componentes.html',
  styleUrls: ['./catalogo-componentes.css']
})
export class CatalogoComponentesComponent implements OnInit {
  productos: any[] = [];
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

// Dentro de tu clase CatalogoComponentesComponent:

ngOnInit() {
  this.cargarProductos();
}

cargarProductos() {
  this.http.get<any[]>('http://localhost:8082/productos').subscribe({
    next: (res) => this.productos = res,
    error: (err) => console.error('Error al conectar con el catálogo', err)
  });
}

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}