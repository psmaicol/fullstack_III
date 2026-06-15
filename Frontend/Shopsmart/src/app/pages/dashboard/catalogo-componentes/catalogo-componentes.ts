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

  ngOnInit() {
    this.cargarProductos();
  }

  // GET: Obtiene exclusivamente los productos registrados en el puerto 8082
  cargarProductos() {
    this.loading = true;
    this.http.get<any[]>('http://localhost:8082/productos').subscribe({
      next: (res) => {
        this.productos = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al conectar con el inventario', err);
        alert('❌ No se pudo conectar con el inventario. Asegúrate de que el puerto 8082 esté encendido.');
      }
    });
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}