import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resenas-componentes.html',
  styleUrls: ['./resenas-componentes.scss']
})
export class ResenaComponent implements OnInit {
  listaResenas: any[] = [];
  productos: any[] = []; 
  nuevaResena = {
    productoId: 0, 
    usuarioId: 1,  
    calificacion: 5,
    comentario: ''
  };
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<any[]>('http://localhost:8082/productos').subscribe({
      next: (res) => {
        this.productos = res;
      },
      error: (err) => {
        console.error('Error al obtener productos para el catálogo de reseñas:', err);
      }
    });
  }

  // GET: Leer comentarios filtrados por el producto seleccionado (Puerto 8085)
  cargarResenas() {
    if (!this.nuevaResena.productoId || this.nuevaResena.productoId === 0) {
      this.listaResenas = [];
      return;
    }

    this.http.get<any[]>(`http://localhost:8085/resenas/producto/${this.nuevaResena.productoId}`).subscribe({
      next: (res) => {
        this.listaResenas = res;
      },
      error: (err) => {
        console.error('Error conectando al microservicio 8085:', err);
      }
    });
  }

  // Evento que se dispara cada vez que el usuario elige un producto diferente
  onProductoCambiado() {
    this.cargarResenas();
  }

  // POST: Guardar una nueva opinión en el backend de Java
  publicarResena() {
    // Validamos en Frontend que el producto sea válido
    if (!this.nuevaResena.productoId || this.nuevaResena.productoId === 0) {
      alert('Por favor, selecciona un producto antes de dejar una reseña.');
      return;
    }

    if (!this.nuevaResena.comentario.trim()) {
      alert('Por favor, escribe un comentario antes de enviar.');
      return;
    }

    this.loading = true;

    // Ajustado a tu ruta real del backend sin el prefijo "/api"
    this.http.post('http://localhost:8085/resenas', this.nuevaResena).subscribe({
      next: () => {
        this.loading = false;
        alert('💬 ¡Reseña guardada con éxito!');
        this.nuevaResena.comentario = ''; // Vaciar la caja de texto
        this.cargarResenas(); // Recargar la lista del producto actual de forma automática
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al guardar:', err);
        alert('❌ Error al publicar la reseña. Revisa las restricciones del servidor.');
      }
    });
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}