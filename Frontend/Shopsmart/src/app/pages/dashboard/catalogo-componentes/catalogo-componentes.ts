import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo-componentes',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './catalogo-componentes.html',
  styleUrl: './catalogo-componentes.css',
})
export class CatalogoComponentes implements OnInit {
  productos: any[] = [];
  resenas: any[] = [];
  productoSeleccionadoId: number | null = null;

  nuevoProd = { nombre: '', precio: 0, stock: 0 };
  nuevaResena = { calificacion: 5, comentario: '' };

  // Inyectamos HttpClient para conectarnos directo a Spring Boot
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarProductos();
  }

  // Llama al Microservicio de INVENTARIO (8080)
  cargarProductos() {
    this.http.get<any[]>('http://localhost:8080/api/productos').subscribe({
      next: (res) => this.productos = res,
      error: (err) => console.error('Error cargando catálogo', err)
    });
  }

  crearProducto() {
    this.http.post('http://localhost:8080/api/productos', this.nuevoProd).subscribe({
      next: () => {
        alert('✅ ¡Producto agregado a la base de datos!');
        this.nuevoProd = { nombre: '', precio: 0, stock: 0 }; // Limpiar formulario
        this.cargarProductos(); // Refrescar lista
      },
      error: (err) => alert('❌ Error al crear producto. ¿Está el puerto 8080 encendido?')
    });
  }

  // Llama al Microservicio de RESEÑAS (8085)
  verResenas(id: number) {
    this.productoSeleccionadoId = id;
    this.http.get<any[]>('http://localhost:8085/api/resenas').subscribe({
      next: (todasLasResenas) => {
        // Filtramos solo las reseñas del producto al que se le hizo clic
        this.resenas = todasLasResenas.filter(r => r.productoId === id);
      },
      error: () => console.error('Error conectando a Reseñas 8085')
    });
  }

  addResena(prodId: number) {
    const payload = { productoId: prodId, usuarioId: 1, ...this.nuevaResena };
    this.http.post('http://localhost:8085/api/resenas', payload).subscribe({
      next: () => {
        alert('💬 Reseña guardada con éxito');
        this.nuevaResena = { calificacion: 5, comentario: '' };
        this.verResenas(prodId); 
      },
      error: () => alert('❌ Error al publicar la reseña')
    });
  }
}